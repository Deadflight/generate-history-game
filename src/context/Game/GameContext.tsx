import { createContext } from "react";
import { GameState } from "./GameProvider";

interface ContextProps extends GameState {
	//Methods
	onResetState: () => void;
	onAddPhraseToHystory: (phraseToAdd: string) => void;
}

export const GameContext = createContext({} as ContextProps);
