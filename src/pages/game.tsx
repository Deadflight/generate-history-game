import { MainLayout } from "@/layouts";
import { HistoryTextGeneratedView, SelectPhrasesView } from "@/views";
import { Box } from "@mui/material";
import React from "react";

const GamePage = () => {
	return (
		<MainLayout>
			<Box paddingTop={"20px"}>
				<SelectPhrasesView />
				<HistoryTextGeneratedView />
			</Box>
		</MainLayout>
	);
};

export default GamePage;
