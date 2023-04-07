import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export const FullScreenLoadingView = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			height="100vh"
		>
			<Typography sx={{ mb: 3 }} variant="h2" fontWeight={200} fontSize={20}>
				Cargando...
			</Typography>
			<CircularProgress thickness={2} />
		</Box>
	);
};
