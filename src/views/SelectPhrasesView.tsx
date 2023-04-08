import { SocketContext } from "@/context";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FullScreenLoadingView } from "./FullScreenLoadingView";

export const SelectPhrasesView = () => {
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

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			minHeight={"100vh"}
		>
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
