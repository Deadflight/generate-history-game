import React from "react";
import { evaluateStory, generateTopics } from "@/services";

export const useGameContext = () => {
	const onStartGetResult = async (history: string) => {
		try {
			const { data } = await evaluateStory(history);

			return data;
		} catch (error) {
			throw new Error("Error in useGameContext Hook onStartGetResult ");
		}
	};

	const onGetTopics = async () => {
		try {
			const { data } = await generateTopics();

			return data;
		} catch (error) {
			throw new Error("Error in useGameContext Hook onGetTopics ");
		}
	};

	return { onStartGetResult };
};
