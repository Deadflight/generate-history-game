import { createContext } from "react";

interface ContextProps {
	history: string;

	//Methods
	onAddPhraseToHystory: (phraseToAdd: string) => void;
	onResetGameToInitialState: () => void;
}

export const GameContext = createContext({} as ContextProps);
