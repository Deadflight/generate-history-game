import { FC, PropsWithChildren, useReducer } from "react";
import { GameContext, gameReducer } from "./";
import { IEvaluateHistoryResponse } from "@/interfaces";
import { evaluateStory } from "@/services";

export interface GameState {
	history: string;
	scoreResult: IEvaluateHistoryResponse;
	isGameCtxLoading: boolean;
}

const GAME_INITIAL_STATE: GameState = {
	history: "",
	scoreResult: {
		score: -1,
	},
	isGameCtxLoading: false,
};

export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(gameReducer, GAME_INITIAL_STATE);

	const onGetScoreResult = async () => {
		onGameToggleLoading(true);
		try {
			const { data } = await evaluateStory(state.history);
			dispatch({ type: "[Game] - Get Score Result", payload: data! });
		} catch (error) {
			throw new Error("Error in Game Provider");
		} finally {
			onGameToggleLoading(false);
		}
	};

	const onAddPhraseToHystory = (phraseToAdd: string) => {
		dispatch({
			type: "[Game] - ADD Phrase to History",
			payload:
				state.history.length === 0
					? phraseToAdd
					: `${state.history} ${phraseToAdd}`,
		});
	};

	const onResetGameToInitialState = () => {
		dispatch({ type: "[Game] - Reset State", payload: GAME_INITIAL_STATE });
	};

	const onGameToggleLoading = (isLoading: boolean) => {
		dispatch({ type: "[Game] - Toggle Loading", payload: isLoading });
	};

	return (
		<GameContext.Provider
			value={{
				...state,

				//Methods
				onGetScoreResult,
				onResetGameToInitialState,
				onAddPhraseToHystory,
				onGameToggleLoading,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
