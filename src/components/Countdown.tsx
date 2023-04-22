import { GameContext } from "@/context";
import { useCountdown, useGameContext } from "@/hooks";
import { TimeField } from "@mui/x-date-pickers";
import { useRouter } from "next/router";
import React, { FC, useContext, useEffect } from "react";

interface Props {
	targetDate: Date;
	format?: string;
}

export const Countdown: FC<Props> = ({ targetDate, format = "mm:ss" }) => {
	const { countdown } = useCountdown(targetDate);
	const { onGetResult } = useContext(GameContext);
	const router = useRouter();

	useEffect(() => {
		if (countdown < 0) {
			const getResult = async () => {
				await onGetResult();
				router.replace(`/game/result`);
			};
			getResult();
		}
	}, [countdown, router, onGetResult]);

	return <TimeField value={new Date(countdown)} format={format} readOnly />;
};
