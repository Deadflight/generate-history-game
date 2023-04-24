import { GameContext } from "@/context";
import { IEvaluateHistoryResponse } from "@/interfaces";
import { evaluateStory } from "@/services";
import { useCallback, useContext, useEffect, useState } from "react";

export const useGetScoreResult = () => {
	const { history } = useContext(GameContext);

	const [scoreResult, setScoreResult] =
		useState<IEvaluateHistoryResponse | null>(null);

	const [isLoadingScore, setIsLoadingScore] = useState(true);

	const getResult = useCallback(async () => {
		if (!scoreResult) {
			try {
				const { data } = await evaluateStory(history);

				setScoreResult(data);
			} catch (error) {
				throw new Error("Error in useGetScoreResult Hook ");
			} finally {
				setIsLoadingScore(false);
			}
		}
	}, [history, scoreResult]);

	useEffect(() => {
		getResult();
	}, [getResult]);

	return { scoreResult, isLoadingScore, setScoreResult, setIsLoadingScore };
};
