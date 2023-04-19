import { ScoreResult } from "@/components/ScoreResult";
import { SocketContext } from "@/context";
import { useEvaluateHistory } from "@/hooks";
import { FullScreenLoadingView, HistoryTextGeneratedView } from "@/views";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const ResultPage = () => {
	const { data, isEvaluatingHistory } = useEvaluateHistory();
	const { onGetInitialPhrasesRequested, onResetToInitialState } =
		useContext(SocketContext);
	const router = useRouter();

	const onMakeAnotherHistory = async () => {
		onResetToInitialState();
		await onGetInitialPhrasesRequested();
		router.push("/game");
	};

	return isEvaluatingHistory || !data ? (
		<FullScreenLoadingView />
	) : (
		<Container maxWidth="sm">
			<Box display={"flex"} flexDirection={"column"} gap={2}>
				<ScoreResult score={data?.score!} />
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

export default ResultPage;
