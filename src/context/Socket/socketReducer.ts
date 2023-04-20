import { SocketState } from "./";
import { ISocketData } from "../../interfaces/socket";

// Con esto es como en typescript creamos algo como los actions creators
type SocketActionType =
	| { type: "[Socket] - Generate Initial Phrases" }
	| { type: "[Socket] - Get Socket"; payload: WebSocket }
	| { type: "[Socket] - Delete Socket" }
	| { type: "[Socket] - Get Message"; payload: ISocketData }
	| { type: "[Socket] - Is Loading Socket"; payload: boolean }
	| { type: "[Socket] - Reset State"; payload: SocketState };

export const socketReducer = (
	state: SocketState,
	action: SocketActionType
): SocketState => {
	switch (action.type) {
		case "[Socket] - Get Socket":
			return {
				...state,
				socket: action.payload,
			};
		case "[Socket] - Delete Socket":
			return {
				...state,
				socket: null,
			};
		case "[Socket] - Generate Initial Phrases":
			return {
				...state,
			};

		case "[Socket] - Get Message": {
			return {
				...state,
				message: action.payload,
			};
		}

		case "[Socket] - Is Loading Socket": {
			return {
				...state,
				isLoadingSocket: action.payload,
			};
		}

		case "[Socket] - Reset State": {
			return {
				...state,
				message: {
					code: null,
				},
			};
		}

		default:
			return state;
	}
};
