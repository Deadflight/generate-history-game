import { useContext, useState } from "react";
import { GameContext } from "@/context";
import { IEvaluateHistoryResponse } from "@/interfaces";
import { evaluateStory } from "@/services";

export const useEvaluateHistory = () => {
	const { history } = useContext(GameContext);

	const [scoreResult, setScoreResult] = useState<IEvaluateHistoryResponse>({
		score: -1,
	});
	const [isLoading, setIsLoading] = useState(true);

	const onStartGetResult = async () => {
		try {
			const { data } = await evaluateStory(history);
			setScoreResult(data!);
		} catch (error) {
			throw new Error("Error in Game Provider");
		} finally {
			setIsLoading(false);
		}
	};

	return { scoreResult, isLoading, onStartGetResult };
};
