import { IEvaluateHistoryResponse } from "@/interfaces";
import { createContext } from "react";

interface ContextProps {
	history: string;
	scoreResult: IEvaluateHistoryResponse;
	isGameCtxLoading: boolean;

	//Methods
	onAddPhraseToHystory: (phraseToAdd: string) => void;
	onGetScoreResult: () => Promise<void>;
	onGameToggleLoading: (isLoading: boolean) => void;
	onResetGameToInitialState: () => void;
}

export const GameContext = createContext({} as ContextProps);
