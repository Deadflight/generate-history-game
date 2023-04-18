import { ScoreResult } from "@/components/ScoreResult";
import { useEvaluateHistory } from "@/hooks";
import { FullScreenLoadingView } from "@/views";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ResultPage = () => {
	const { data, status, isEvaluatingHistory } = useEvaluateHistory();
	const navigate = useRouter();

	useEffect(() => {
		if (!data && !isEvaluatingHistory) {
			navigate.push(`/${status}`);
		}
	}, [data, navigate, status, isEvaluatingHistory]);

	return isEvaluatingHistory ? (
		<FullScreenLoadingView />
	) : (
		<>
			<ScoreResult score={data?.score!} />
		</>
	);
};

export default ResultPage;
