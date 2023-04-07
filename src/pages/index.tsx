import { BACKEND_SOCKET_CODES } from "@/constants";
import { SocketContext } from "@/context";
import { MainLayout } from "@/layouts";
import { PlayVIew, SelectPhrasesView } from "@/views";
import { useContext } from "react";

export default function Home() {
	const { message, activeMessage } = useContext(SocketContext);

	console.log({ message, activeMessage });

	return (
		<MainLayout>
			{message.code !== BACKEND_SOCKET_CODES.fivePhrase.code &&
			message.code !== BACKEND_SOCKET_CODES.onePhrase.code ? (
				<PlayVIew />
			) : (
				<SelectPhrasesView />
			)}
		</MainLayout>
	);
}
