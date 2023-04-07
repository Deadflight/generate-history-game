export interface ISocketData {
	code: CodeType;
	options?: string[];
}

export type CodeType = "G200" | "GP-205" | null;
