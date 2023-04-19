import { SocketContext } from "@/context";
import { IEvaluateHistoryResponse } from "@/interfaces";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { FC, useContext } from "react";

interface Props extends IEvaluateHistoryResponse {}

export const ScoreResult: FC<Props> = ({ score }) => {
	return (
		<Card
			sx={{
				minWidth: 275,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<CardContent>
				<Typography variant="h2">Felicidades tu puntuación es:</Typography>
				<Typography
					variant="h2"
					textAlign={"center"}
					fontSize={32}
					fontWeight={500}
				>{`${score}/10`}</Typography>
			</CardContent>
		</Card>
	);
};
