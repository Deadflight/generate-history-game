import { useEvaluateHistory } from "@/hooks";
import { FullScreenLoadingView } from "@/views";
import { useRouter } from "next/router";
import React from "react";

const ResultPage = () => {
	const { data, status } = useEvaluateHistory();
	const navigate = useRouter();

	if (!data) {
		navigate.push(`/${status}`);
	}

	return !data ? <FullScreenLoadingView /> : <h1>Result Page</h1>;
};

export default ResultPage;
