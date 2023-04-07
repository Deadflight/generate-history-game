import { ISocketData } from "@/interfaces";
import { createContext } from "react";

interface ContextProps {
	message: ISocketData;
	socket: WebSocket | null;
	history: string;
	selectedPhrase: string;
	activeMessage: string[];

	//Methods
	onGetInitialPhrasesRequested: () => Promise<void>;
	onGetNextPhrasesRequested: (pharaseChosed: string) => Promise<void>;
	onAddPhraseToHystory: (phraseToAdd: string) => void;
}

export const SocketContext = createContext({} as ContextProps);
