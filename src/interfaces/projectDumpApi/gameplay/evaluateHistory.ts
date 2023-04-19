export interface IEvaluateHistoryBody {
	story: string;
}

export interface IEvaluateHistoryResponse {
	score: number;
}

export interface IEvaluateHistory {
	data: IEvaluateHistoryResponse | null;
	status: number | null;
	message: string;
}
