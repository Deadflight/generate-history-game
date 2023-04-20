import { ISocketData } from "@/interfaces";
import { createContext } from "react";

interface ContextProps {
	message: ISocketData;
	socket: WebSocket | null;
	isLoadingSocket: boolean;

	//Methods
	onGetInitialPhrasesRequested: () => Promise<void>;
	onResetToInitialState: () => void;
}

export const SocketContext = createContext({} as ContextProps);
