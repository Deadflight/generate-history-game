import { FC, PropsWithChildren, useReducer } from "react";
import { TimeContext, timeReducer } from "./";

export interface TimeState {}

const Time_INITIAL_STATE: TimeState = {
	property: false,
};

export const TimeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(timeReducer, Time_INITIAL_STATE);

	return (
		<TimeContext.Provider value={{ ...state }}>{children}</TimeContext.Provider>
	);
};
