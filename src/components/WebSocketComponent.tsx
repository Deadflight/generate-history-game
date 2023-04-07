import { FRONTEND_SOCKET_CODES } from "@/constants";
import { SocketContext } from "@/context";
import React, { useContext } from "react";

export const WebSocketComponent = () => {
	const { socket, message } = useContext(SocketContext);

	const sendCode = async () => {
		if (socket) {
			socket.send(
				JSON.stringify(FRONTEND_SOCKET_CODES.generateInitialPhrasesRequested)
			);
		}
	};

	console.log(message);

	return (
		<div>
			<h1>Historia Generada</h1>
			<button onClick={sendCode}>Click</button>
		</div>
	);
};
