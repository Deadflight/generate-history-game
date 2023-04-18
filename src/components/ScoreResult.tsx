import { SocketContext } from "@/context";
import { IEvaluateHistoryResponse } from "@/interfaces";
import { Card, CardContent } from "@mui/material";
import React, { FC, useContext } from "react";

interface Props extends IEvaluateHistoryResponse {}

export const ScoreResult: FC<Props> = ({ score }) => {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>{`${score}/10`}</CardContent>
		</Card>
	);
};
