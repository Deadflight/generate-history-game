import { GameContext, SocketContext } from "@/context";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { Countdown } from "@/components";
import { useRouter } from "next/router";
import Link from "next/link";

export const SelectPhrasesView = () => {
	const { isLoadingSocket, message, onGetInitialPhrasesRequested } =
		useContext(SocketContext);
	const router = useRouter();

	const { onAddPhraseToHystory, onGetResult } = useContext(GameContext);

	const onSelectPhrase = async (phrase: string) => {
		onAddPhraseToHystory(phrase);
		await onGetInitialPhrasesRequested();
	};

	const targetDate = useMemo(() => {
		const date = new Date();
		date.setMinutes(date.getMinutes() + 1);

		return date;
	}, []);

	const getResult = async () => {
		await onGetResult();
		router.push("/game/result");
	};

	return (
		<Box>
			{message?.options ? (
				<Box display={"flex"} justifyContent={"end"}>
					<Countdown targetDate={targetDate} />
				</Box>
			) : null}
			<Typography textAlign={"center"} gutterBottom>
				Selecciona una Frase
			</Typography>
			{/* <Link href={"/game/result"}>History</Link> */}

			<Button onClick={getResult}>History</Button>

			<Grid
				container
				display={"grid"}
				gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
				gridAutoRows={"1fr"}
				gap={2}
				justifyItems={"center"}
				justifyContent={"center"}
			>
				{isLoadingSocket || !message?.options ? (
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
