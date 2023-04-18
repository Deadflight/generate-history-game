import { GameState } from "./";

// Con esto es como en typescript creamos algo como los actions creators
type GameActionType = { type: "" };

export const gameReducer = (
	state: GameState,
	action: GameActionType
): GameState => {
	switch (action.type) {
		case "":
			return {
				...state,
			};

		default:
			return state;
	}
};
