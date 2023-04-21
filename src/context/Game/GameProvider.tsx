import { FC, PropsWithChildren, useReducer } from "react";
import { GameContext, gameReducer } from "./";
import { useGameContext } from "@/hooks";
import { IEvaluateHistoryResponse } from "@/interfaces";

export interface GameState {
	history: string;
	isGameCtxLoading: boolean;
	scoreResult: IEvaluateHistoryResponse;
}

const GAME_INITIAL_STATE: GameState = {
	history: "",
	isGameCtxLoading: true,
	scoreResult: {
		score: -1,
	},
};

export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(gameReducer, GAME_INITIAL_STATE);

	const { onStartGetResult } = useGameContext();

	const onAddPhraseToHystory = (phraseToAdd: string) => {
		dispatch({
			type: "[Game] - ADD Phrase to History",
			payload:
				state.history.length === 0
					? phraseToAdd
					: `${state.history} ${phraseToAdd}`,
		});
	};

	const onGetResult = async () => {
		const data = await onStartGetResult(state.history);

		dispatch({
			type: "[Game] - Get Score Result",
			payload: data ? data : state.scoreResult,
		});
	};

	const onResetGameToInitialState = () => {
		dispatch({ type: "[Game] - Reset State", payload: GAME_INITIAL_STATE });
	};

	const onNewGame = () => {
		dispatch({ type: "[Game] - New Game" });
	};

	return (
		<GameContext.Provider
			value={{
				...state,

				//Methods
				onNewGame,
				onResetGameToInitialState,
				onAddPhraseToHystory,
				onGetResult,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
