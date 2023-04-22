import { createContext } from "react";
import { GameState } from "./GameProvider";

interface ContextProps extends GameState {
	//Methods
	onNewGame: () => void;
	onAddPhraseToHystory: (phraseToAdd: string) => void;
	onGetResult: () => Promise<void>;
}

export const GameContext = createContext({} as ContextProps);
