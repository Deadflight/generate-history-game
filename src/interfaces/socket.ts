export interface ISocketData {
	code: CodeType;
	options?: string[];
}

export type CodeType = "G200" | "GP205" | null;
