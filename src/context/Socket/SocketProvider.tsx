import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { SocketContext, socketReducer } from "./";
import { BACKEND_SOCKET_CODES, FRONTEND_SOCKET_CODES } from "@/constants";
import { ISocketData } from "@/interfaces";

export interface SocketState {
	message: ISocketData;
	activeMessage: string[];
	socket: WebSocket | null;
	history: string;
	selectedPhrase: string;
}

const Socket_INITIAL_STATE: SocketState = {
	message: {
		code: null,
	},
	activeMessage: [],
	socket: null,
	history: "",
	selectedPhrase: "",
};

export const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(socketReducer, Socket_INITIAL_STATE);

	useEffect(() => {
		const ws = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL!);

		ws.onopen = () => {
			console.log("socket conected");
			dispatch({ type: "[Socket] - Get Socket", payload: ws });
		};

		ws.onmessage = ({ data }: MessageEvent) => {
			console.log({ data });
			const message: ISocketData = JSON.parse(data);
			dispatch({ type: "[Socket] - Get Message", payload: message });
		};

		ws.onclose = () => {
			console.log("socket closed");
			dispatch({ type: "[Socket] - Delete Socket" });
		};

		return () => {
			if (ws) {
				console.log("socket closed");
				ws.close();
				dispatch({ type: "[Socket] - Delete Socket" });
			}
		};
	}, []);

	useEffect(() => {
		if (
			state.message.code === BACKEND_SOCKET_CODES.initialPhrasesRequested.code
		) {
			state.socket?.send(
				JSON.stringify(FRONTEND_SOCKET_CODES.initialPhrasesRequested)
			);
		}
	}, [state.socket, state.message.code]);

	useEffect(() => {
		if (state.message.code === BACKEND_SOCKET_CODES.onePhrase.code) {
			const filterOption = state.message.options?.filter(
				(option) => option !== state.selectedPhrase
			);

			console.log({ filterOption });

			if (filterOption) {
				const newOptions = [...filterOption, state.selectedPhrase];

				const message: ISocketData = {
					code: state.message.code,
					options: newOptions,
				};
				console.log("Provider", { message });
				// dispatch({ type: "[Socket] - ADD New Option", payload: message });
			}
		}
	}, [state.selectedPhrase, state.message.code]);

	const onGetInitialPhrasesRequested = async () => {
		if (state.socket) {
			state.socket.send(
				JSON.stringify(FRONTEND_SOCKET_CODES.generateInitialPhrasesRequested)
			);
		}
	};

	const onGetNextPhrasesRequested = async (pharaseChosed: string) => {
		if (state.socket) {
			state.socket.send(
				JSON.stringify(FRONTEND_SOCKET_CODES.nextPhrasesRequested)
			);
		}
	};

	const onAddPhraseToHystory = (phraseToAdd: string) => {
		dispatch({
			type: "[Socket] - ADD Phrase to History",
			payload: phraseToAdd,
		});
	};

	return (
		<SocketContext.Provider
			value={{
				...state,

				//Methods
				onGetInitialPhrasesRequested,
				onGetNextPhrasesRequested,
				onAddPhraseToHystory,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
};
