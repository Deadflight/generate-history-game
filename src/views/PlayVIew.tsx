import { SocketContext } from "@/context";
import { Container, Grid, Button } from "@mui/material";
import React, { useContext } from "react";

export const PlayVIew = () => {
	const { onGetInitialPhrasesRequested } = useContext(SocketContext);

	return (
		<Container>
			<Grid
				container
				spacing={3}
				sx={{
					minHeight: "100vh",
				}}
			>
				<Grid
					item
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					xs={12}
				>
					<Button
						variant="outlined"
						color="primary"
						size="medium"
						onClick={onGetInitialPhrasesRequested}
					>
						Jugar
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};
