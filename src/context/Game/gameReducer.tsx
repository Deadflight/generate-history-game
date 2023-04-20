import { IEvaluateHistoryResponse } from "@/interfaces";
import { GameState } from "./";

// Con esto es como en typescript creamos algo como los actions creators
type GameActionType =
	| { type: "[Game] - Get Score Result"; payload: IEvaluateHistoryResponse }
	| { type: "[Game] - Toggle Loading"; payload: boolean }
	| { type: "[Game] - Reset State"; payload: GameState }
	| { type: "[Game] - ADD Phrase to History"; payload: string };

export const gameReducer = (
	state: GameState,
	action: GameActionType
): GameState => {
	switch (action.type) {
		case "[Game] - Get Score Result":
			return {
				...state,
				scoreResult: action.payload,
				isGameCtxLoading: false,
			};

		case "[Game] - Toggle Loading":
			return {
				...state,
				isGameCtxLoading: false,
			};

		case "[Game] - Reset State": {
			return {
				...action.payload,
			};
		}

		case "[Game] - ADD Phrase to History": {
			return {
				...state,
				history: action.payload,
			};
		}

		default:
			return state;
	}
};
