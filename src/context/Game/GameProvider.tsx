import { FC, PropsWithChildren, useReducer } from "react";
import { GameContext, gameReducer } from "./";

export interface GameState {}

const Game_INITIAL_STATE: GameState = {};

export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(gameReducer, Game_INITIAL_STATE);

	return (
		<GameContext.Provider value={{ ...state }}>{children}</GameContext.Provider>
	);
};
