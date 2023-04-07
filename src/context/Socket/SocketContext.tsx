import { ISocketData } from "@/interfaces";
import { createContext } from "react";

interface ContextProps {
	message: ISocketData;
	socket: WebSocket | null;

	//Methods
	onGetInitialPhrasesRequested: () => Promise<void>;
	onGetNextPhrasesRequested: () => Promise<void>;
	onAddPhraseToHystory: (phraseToAdd: string) => void;
}

export const SocketContext = createContext({} as ContextProps);
