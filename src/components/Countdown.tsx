import { GameContext } from "@/context";
import { useCountdown, useGameContext } from "@/hooks";
import { TimeField } from "@mui/x-date-pickers";
import { useRouter } from "next/router";
import React, { FC, useCallback, useContext, useEffect } from "react";

interface Props {
	targetDate: Date;
	format?: string;
}

export const Countdown: FC<Props> = ({ targetDate, format = "mm:ss" }) => {
	const { countdown, isTimeout } = useCountdown(targetDate);
	const { onGetResult } = useContext(GameContext);
	const router = useRouter();

	const getResult = useCallback(async () => {
		if (isTimeout) {
			await onGetResult();

			router.push(`/game/result`);
		}
	}, [isTimeout, router, onGetResult]);

	useEffect(() => {
		getResult();
	}, [getResult]);

	return <TimeField value={new Date(countdown)} format={format} readOnly />;
};
