import { SocketContext } from "@/context";
import { FullScreenLoadingView } from "@/views";
import { useRouter } from "next/router";
import React, { FC, useContext, useEffect } from "react";

const ResultPage: FC = () => {
	const { message } = useContext(SocketContext);
	const router = useRouter();

	useEffect(() => {
		if (!message.options) {
			router.replace("/");
		}
	}, [router, message.options]);

	if (!message.options) return <FullScreenLoadingView />;

	return <div>result</div>;
};

export default ResultPage;
