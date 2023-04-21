import { useCountdown } from "@/hooks";
import { TimeField } from "@mui/x-date-pickers";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

interface Props {
	targetDate: Date;
	format?: string;
}

export const Countdown: FC<Props> = ({ targetDate, format = "mm:ss" }) => {
	const { countdown } = useCountdown(targetDate);
	const router = useRouter();

	useEffect(() => {
		if (countdown < 0) {
			router.replace(`/game/result`);
		}
	}, [countdown, router]);

	return <TimeField value={new Date(countdown)} format={format} readOnly />;
};
