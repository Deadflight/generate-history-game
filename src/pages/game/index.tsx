import { MainLayout } from "@/layouts";
import { HistoryTextGeneratedView, SelectPhrasesView } from "@/views";
import { Box, Container } from "@mui/material";
import React from "react";

const GamePage = () => {
	return (
		<MainLayout>
			<Container>
				<Box
					paddingTop={"20px"}
					display={"flex"}
					flexDirection={"column"}
					gap={2}
				>
					<SelectPhrasesView />
					<HistoryTextGeneratedView />
				</Box>
			</Container>
		</MainLayout>
	);
};

export default GamePage;
