import { GameContext } from "@/context";
import { useCountdown } from "@/hooks";
import { TimeField } from "@mui/x-date-pickers";
import { useRouter } from "next/router";
import React, { FC, useContext, useEffect } from "react";

interface Props {
	targetDate: Date;
	format?: string;
}

export const Countdown: FC<Props> = ({ targetDate, format = "mm:ss" }) => {
	const { countdown } = useCountdown(targetDate);
	const { onGetScoreResult } = useContext(GameContext);
	const router = useRouter();

	useEffect(() => {
		if (countdown < 0) {
			onGetScoreResult();
			router.replace(`game/result`);
		}
	}, [countdown, router, onGetScoreResult]);

	return <TimeField value={new Date(countdown)} format={format} readOnly />;
};
