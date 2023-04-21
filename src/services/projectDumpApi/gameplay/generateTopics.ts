import { projectDumpApi } from "@/lib";
import axios from "axios";
import React from "react";

export const generateTopics = async () => {
	try {
		const { data, status } = await projectDumpApi.get<string>(
			`/gameplay/story-topics/`
		);

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error("Error in get Topics");
		}
		throw new Error("Error in get Topics");
	}
};
