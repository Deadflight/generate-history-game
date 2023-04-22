import { projectDumpApi } from "@/lib";

export const generateTopics = async () => {
	try {
		const { data } = await projectDumpApi.get<any>(`/gameplay/story-topics/`);

		return data;
	} catch (error) {
		throw new Error("Error in get Topics");
	}
};
