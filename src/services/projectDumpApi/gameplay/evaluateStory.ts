import { IEvaluateHistory, IEvaluateHistoryResponse } from "@/interfaces";
import { projectDumpApi } from "@/lib";
import axios from "axios";

export const evaluateStory = async (
	story: string
): Promise<IEvaluateHistory> => {
	try {
		const { data, status } =
			await projectDumpApi.post<IEvaluateHistoryResponse>(
				`/gameplay/evaluate-story/`,
				{
					story,
				}
			);

		return {
			data,
			status,
			message: "",
		};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return {
				data: null,
				message: error.message,
				status: error.status || 500,
			};
		}

		return {
			data: null,
			message: "Error at Evaluate History",
			status: 500,
		};
	}
};
