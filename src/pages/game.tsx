import { MainLayout } from "@/layouts";
import { HistoryTextGeneratedView, SelectPhrasesView } from "@/views";
import React from "react";

const GamePage = () => {
	return (
		<MainLayout>
			<SelectPhrasesView />
			<HistoryTextGeneratedView />
		</MainLayout>
	);
};

export default GamePage;
