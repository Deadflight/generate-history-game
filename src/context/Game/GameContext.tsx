import { createContext } from "react";
import { GameState } from "./GameProvider";
import { IEvaluateHistoryResponse } from "@/interfaces";

interface ContextProps extends GameState {
	//Methods
	onNewGame: () => void;
	onAddPhraseToHystory: (phraseToAdd: string) => void;
	onGetResult: () => Promise<void>;
	onSetGameResult: (data: IEvaluateHistoryResponse) => void;
}

export const GameContext = createContext({} as ContextProps);
