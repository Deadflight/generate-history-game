import { SocketContext } from "@/context";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FullScreenLoadingView } from "./FullScreenLoadingView";

export const SelectPhrasesView = () => {
	const { message, onGetInitialPhrasesRequested } = useContext(SocketContext);

	if (!message?.options) return <FullScreenLoadingView />;

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
				{message?.options?.map((option, index) => (
					<Button
						variant="outlined"
						color="primary"
						key={`${option} ${index}`}
						onClick={onGetInitialPhrasesRequested}
					>
						{option}
					</Button>
				))}
			</Grid>
		</Box>
	);
};
