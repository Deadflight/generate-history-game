import React, { useContext, useEffect } from "react";
import { ScoreResult } from "@/components";
import { GameContext, SocketContext } from "@/context";
import { FullScreenLoadingView, HistoryTextGeneratedView } from "@/views";
import { Box, Button, Container } from "@mui/material";
import { useRouter } from "next/router";
import { useGameContext } from "@/hooks";

const ResultPage = () => {
	const router = useRouter();

	const { onGetInitialPhrasesRequested } = useContext(SocketContext);
	const { scoreResult, isGameCtxLoading, isNewGame, onNewGame } =
		useContext(GameContext);

	const onMakeAnotherHistory = async () => {
		await onGetInitialPhrasesRequested();
		onNewGame();
		router.push("/game");
	};

	useEffect(() => {
		if (!isGameCtxLoading && scoreResult.score < 0 && !isNewGame) {
			router.push("/");
		}
	}, [isGameCtxLoading, scoreResult.score, router, isNewGame]);

	return isGameCtxLoading || scoreResult?.score < 0 ? (
		<FullScreenLoadingView />
	) : (
		<Container maxWidth="sm">
			<Box display={"flex"} flexDirection={"column"} gap={2}>
				<ScoreResult />
				<HistoryTextGeneratedView />
				<Box display={"flex"} gap={2} justifyContent={"space-between"}>
					<Button variant="outlined" color="primary" size="medium">
						Ver Historia
					</Button>
					<Button
						variant="outlined"
						color="primary"
						size="medium"
						onClick={onMakeAnotherHistory}
					>
						Crear Otra Historia
					</Button>
					<Button variant="outlined" color="primary" size="medium">
						Compartir
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default ResultPage;
