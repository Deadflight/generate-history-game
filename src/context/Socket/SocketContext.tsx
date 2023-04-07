import { ISocketData } from "@/interfaces";
import { createContext } from "react";

interface ContextProps {
	message: ISocketData;
	socket: WebSocket | null;
}

export const SocketContext = createContext({} as ContextProps);
