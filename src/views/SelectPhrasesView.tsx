import { SocketContext } from "@/context";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useMemo } from "react";
import { TimeField } from "@mui/x-date-pickers";
import { useCountdown } from "@/hooks";
import { useRouter } from "next/router";

export const SelectPhrasesView = () => {
	const router = useRouter();

	const {
		isLoadingSocket,
		message,
		onGetInitialPhrasesRequested,
		onAddPhraseToHystory,
	} = useContext(SocketContext);

	const onSelectPhrase = (phrase: string) => {
		onAddPhraseToHystory(phrase);
		onGetInitialPhrasesRequested();
	};

	const targetDate = useMemo(() => {
		const date = new Date();
		date.setMinutes(date.getMinutes() + 2);

		return date;
	}, []);

	const { countdown } = useCountdown(targetDate);

	useEffect(() => {
		if (countdown < 0) {
			router.push("result");
		}
	}, [countdown, router]);

	return (
		<Box>
			<Box display={"flex"} justifyContent={"end"}>
				<TimeField value={new Date(countdown)} format={"mm:ss"} readOnly />
			</Box>
			<Typography textAlign={"center"} gutterBottom>
				Selecciona una Frase
			</Typography>
			<Grid
				container
				display={"grid"}
				gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
				gap={2}
				justifyItems={"center"}
				justifyContent={"center"}
			>
				{isLoadingSocket ? (
					<CircularProgress thickness={2} />
				) : (
					message?.options?.map((option, index) => (
						<Button
							variant="outlined"
							color="primary"
							key={`${option} ${index}`}
							onClick={() => onSelectPhrase(option)}
						>
							{option}
						</Button>
					))
				)}
			</Grid>
		</Box>
	);
};
