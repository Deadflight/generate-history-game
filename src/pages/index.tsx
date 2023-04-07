import { BACKEND_SOCKET_CODES } from "@/constants";
import { SocketContext } from "@/context";
import { MainLayout } from "@/layouts";
import { PlayVIew, SelectPhrasesView } from "@/views";
import { useContext } from "react";

export default function Home() {
	const { message } = useContext(SocketContext);

	return (
		<MainLayout>
			{message.code !== BACKEND_SOCKET_CODES.initialPhrasesRequested.code ? (
				<PlayVIew />
			) : (
				<SelectPhrasesView />
			)}
		</MainLayout>
	);
}
