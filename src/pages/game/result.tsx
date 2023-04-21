import { ScoreResult } from "@/components";
import { SocketContext } from "@/context";
import { useEvaluateHistory } from "@/hooks";
import { FullScreenLoadingView, HistoryTextGeneratedView } from "@/views";
import { Box, Button, Container } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const ResultPage = () => {
	const router = useRouter();
	const { scoreResult, isLoading, onStartGetResult } = useEvaluateHistory();
	const { onGetInitialPhrasesRequested } = useContext(SocketContext);

	const onMakeAnotherHistory = async () => {
		await onGetInitialPhrasesRequested();
		router.push("/game");
	};

	useEffect(() => {
		if (!isLoading && scoreResult?.score < 0) {
			router.push("/");
		}
	}, [router, isLoading, scoreResult?.score]);

	return isLoading && scoreResult?.score < 0 ? (
		<FullScreenLoadingView />
	) : (
		<Container maxWidth="sm">
			<Box display={"flex"} flexDirection={"column"} gap={2}>
				<ScoreResult scoreResult={scoreResult} />
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
