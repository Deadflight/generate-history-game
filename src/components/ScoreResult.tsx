import { GameContext } from "@/context";
import { Card, CardContent, Typography } from "@mui/material";
import React, { FC, useContext } from "react";

export const ScoreResult: FC = () => {
	const { scoreResult } = useContext(GameContext);
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
				>{`${scoreResult.score}/10`}</Typography>
			</CardContent>
		</Card>
	);
};
