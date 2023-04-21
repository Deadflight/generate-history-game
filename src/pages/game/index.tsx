import { GameContext } from "@/context";
import { MainLayout } from "@/layouts";
import { HistoryTextGeneratedView, SelectPhrasesView } from "@/views";
import { Box, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";

const GamePage = () => {
	const { onResetGameToInitialState } = useContext(GameContext);

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
