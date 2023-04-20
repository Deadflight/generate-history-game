import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { SocketContext, socketReducer } from "./";
import { BACKEND_SOCKET_CODES, FRONTEND_SOCKET_CODES } from "@/constants";
import { ISocketData } from "@/interfaces";

export interface SocketState {
	message: ISocketData;
	socket: WebSocket | null;
	isLoadingSocket: boolean;
}

const Socket_INITIAL_STATE: SocketState = {
	message: {
		code: null,
	},

	socket: null,
	isLoadingSocket: false,
};

export const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(socketReducer, Socket_INITIAL_STATE);

	useEffect(() => {
		console.log("socket");
		const ws = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL!);

		ws.onopen = () => {
			dispatch({ type: "[Socket] - Get Socket", payload: ws });
		};

		ws.onmessage = ({ data }: MessageEvent) => {
			console.log({ data });
			const message: ISocketData = JSON.parse(data);
			dispatch({ type: "[Socket] - Get Message", payload: message });
		};

		ws.onclose = () => {
			dispatch({ type: "[Socket] - Delete Socket" });
		};

		return () => {
			if (ws) {
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

		dispatch({ type: "[Socket] - Is Loading Socket", payload: false });
	}, [state.socket, state.message.code]);

	const onGetInitialPhrasesRequested = async () => {
		dispatch({ type: "[Socket] - Is Loading Socket", payload: true });
		if (state.socket) {
			state.socket.send(
				JSON.stringify(FRONTEND_SOCKET_CODES.generateInitialPhrasesRequested)
			);
		}
	};

	const onResetToInitialState = () => {
		dispatch({ type: "[Socket] - Reset State", payload: Socket_INITIAL_STATE });
	};

	return (
		<SocketContext.Provider
			value={{
				...state,

				//Methods
				onGetInitialPhrasesRequested,
				onResetToInitialState,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
};
