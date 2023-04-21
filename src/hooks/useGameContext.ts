import React from "react";
import { evaluateStory } from "@/services";

export const useGameContext = () => {
	const onStartGetResult = async (history: string) => {
		try {
			const { data } = await evaluateStory(history);

			return data;
		} catch (error) {
			throw new Error("Error in Game Provider");
		}
	};
	return { onStartGetResult };
};
