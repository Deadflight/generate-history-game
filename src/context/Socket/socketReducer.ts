import { SocketState } from "./";
import { ISocketData } from "../../interfaces/socket";

// Con esto es como en typescript creamos algo como los actions creators
type SocketActionType =
	| { type: "[Socket] - Generate Initial Phrases" }
	| { type: "[Socket] - Get Socket"; payload: WebSocket }
	| { type: "[Socket] - Delete Socket" }
	| { type: "[Socket] - Get Message"; payload: ISocketData }
	| { type: "[Socket] - ADD Phrase to History"; payload: string };

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

		case "[Socket] - ADD Phrase to History": {
			return {
				...state,
				history: `${state.history} ${action.payload}`,
			};
		}

		default:
			return state;
	}
};
