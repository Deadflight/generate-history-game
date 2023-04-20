import { GameContext } from "@/context";
import { FullScreenLoadingView, ResultView } from "@/views";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const ResultPage = () => {
	const { isGameCtxLoading, scoreResult } = useContext(GameContext);
	const router = useRouter();

	useEffect(() => {
		if (!isGameCtxLoading && scoreResult.score < 0) {
			router.push("/");
		}
	}, [router, isGameCtxLoading, scoreResult.score]);

	return isGameCtxLoading || scoreResult.score < 0 ? (
		<FullScreenLoadingView />
	) : (
		<ResultView />
	);
};

export default ResultPage;
