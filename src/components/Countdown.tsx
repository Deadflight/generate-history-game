import { useCountdown } from "@/hooks";
import { TimeField } from "@mui/x-date-pickers";
import React, { FC } from "react";

interface Props {
	targetDate: Date;
	format?: string;
}

export const Countdown: FC<Props> = ({ targetDate, format = "mm:ss" }) => {
	const { countdown } = useCountdown(targetDate);

	return <TimeField value={new Date(countdown)} format={format} readOnly />;
};
