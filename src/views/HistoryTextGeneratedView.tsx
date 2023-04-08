import { SocketContext } from "@/context";
import React, { useContext } from "react";

export const HistoryTextGeneratedView = () => {
	const { history } = useContext(SocketContext);

	console.log({ history });

	return <div>HistoryTextGeneratedView</div>;
};
