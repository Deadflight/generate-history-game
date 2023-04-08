import { ISocketData } from "@/interfaces";
import { createContext } from "react";

interface ContextProps {
	message: ISocketData;
	socket: WebSocket | null;
	history: string;
	isLoadingSocket: boolean;

	//Methods
	onGetInitialPhrasesRequested: () => Promise<void>;
	onAddPhraseToHystory: (phraseToAdd: string) => void;
}

export const SocketContext = createContext({} as ContextProps);
