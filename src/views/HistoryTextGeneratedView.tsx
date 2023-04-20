import { GameContext } from "@/context";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";

export const HistoryTextGeneratedView = () => {
	const { history } = useContext(GameContext);

	return (
		<Grid
			container
			display={!!history ? "flex" : "none"}
			justifyContent={"center"}
		>
			<Grid item>
				<Card>
					<CardContent>
						<Typography variant="body1">Tu Historia</Typography>
						<Typography variant="body2">{history}</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
