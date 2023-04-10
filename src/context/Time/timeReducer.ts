import { TimeState } from "./";

// Con esto es como en typescript creamos algo como los actions creators
type TimeActionType = { type: "[Time] - ActionName" };

export const timeReducer = (
	state: TimeState,
	action: TimeActionType
): TimeState => {
	switch (action.type) {
		case "[Time] - ActionName":
			return {
				...state,
			};

		default:
			return state;
	}
};
