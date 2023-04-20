import { ScoreResult } from "@/components";
import { Box, Button, Container } from "@mui/material";
import React, { useContext } from "react";
import { HistoryTextGeneratedView } from "./HistoryTextGeneratedView";
import { useRouter } from "next/router";
import { GameContext, SocketContext } from "@/context";

export const ResultView = () => {
	const router = useRouter();
	const { onGetInitialPhrasesRequested, onResetToInitialState } =
		useContext(SocketContext);

	const onMakeAnotherHistory = async () => {
		onResetToInitialState();
		await onGetInitialPhrasesRequested();
		router.push("/game");
	};

	return (
		<Container maxWidth="sm">
			<Box display={"flex"} flexDirection={"column"} gap={2}>
				<ScoreResult />
				<HistoryTextGeneratedView />

				<Button
					variant="outlined"
					color="primary"
					size="medium"
					onClick={onMakeAnotherHistory}
				>
					Crear Otra Historia
				</Button>
			</Box>
		</Container>
	);
};
