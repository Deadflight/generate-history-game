import { SocketContext } from "@/context";
import { IEvaluateHistory } from "@/interfaces";
import { evaluateStory } from "@/services";
import { useContext, useEffect, useState } from "react";

export const useEvaluateHistory = () => {
	const { history } = useContext(SocketContext);
	const [results, setResults] = useState<IEvaluateHistory>();

	useEffect(() => {
		const onGetResult = async () => {
			const { data, status, message } = await evaluateStory(history);

			setResults({
				data,
				status,
				message,
			});
		};

		onGetResult();
	}, [history]);

	return {
		...results,
	};
};
