import { SocketContext } from "@/context";
import { IEvaluateHistory } from "@/interfaces";
import { evaluateStory } from "@/services";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export const useEvaluateHistory = () => {
	const { history } = useContext(SocketContext);
	const navigate = useRouter();
	const [results, setResults] = useState<IEvaluateHistory>({
		data: null,
		status: null,
		message: "",
	});
	const [isEvaluatingHistory, setIsEvaluatingHistory] = useState(true);

	useEffect(() => {
		const onGetResult = async () => {
			const { data, status, message } = await evaluateStory(history);

			setResults({
				data,
				status,
				message,
			});

			setIsEvaluatingHistory(false);
		};

		onGetResult();
	}, [history]);

	useEffect(() => {
		if (!results.data && !isEvaluatingHistory) {
			navigate.push(`/${results.status}`);
		}
	}, [results.data, navigate, results.status, isEvaluatingHistory]);

	return {
		...results,
		isEvaluatingHistory,
	};
};
