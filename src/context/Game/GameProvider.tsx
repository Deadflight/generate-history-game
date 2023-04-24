import { FC, PropsWithChildren, useReducer } from "react";
import { GameContext, gameReducer } from "./";

export interface GameState {
	isNewGame: boolean;
	history: string;
	isGameCtxLoading: boolean;
}

const GAME_INITIAL_STATE: GameState = {
	history: "",
	isNewGame: false,
	isGameCtxLoading: false,
};

export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(gameReducer, GAME_INITIAL_STATE);

	const onAddPhraseToHystory = (phraseToAdd: string) => {
		dispatch({
			type: "[Game] - ADD Phrase to History",
			payload:
				state.history.length === 0
					? phraseToAdd
					: `${state.history} ${phraseToAdd}`,
		});
	};

	const onResetState = () => {
		dispatch({ type: "[Game] - Reset State", payload: GAME_INITIAL_STATE });
	};

	return (
		<GameContext.Provider
			value={{
				...state,

				//Methods
				onResetState,
				onAddPhraseToHystory,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
