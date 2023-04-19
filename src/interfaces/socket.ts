export interface ISocketData {
	code: CodeType;
	options?: string[];
}

export type CodeType = "BGP-200" | "BGP-205" | null;
