import { GameState } from "./";

// Con esto es como en typescript creamos algo como los actions creators
type GameActionType =
	| { type: "[Game] - Reset State"; payload: GameState }
	| { type: "[Game] - ADD Phrase to History"; payload: string };

export const gameReducer = (
	state: GameState,
	action: GameActionType
): GameState => {
	switch (action.type) {
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
