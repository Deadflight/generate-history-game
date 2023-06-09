import { SocketContext } from "@/context";
import { Container, Grid, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export const PlayGameView = () => {
	const { onGetInitialPhrasesRequested } = useContext(SocketContext);
	const router = useRouter();

	const onPlayGame = async () => {
		await onGetInitialPhrasesRequested();
		router.push("/game");
	};

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
					<Link href={"/game"} replace>
						<Button
							variant="outlined"
							color="primary"
							size="medium"
							onClick={onPlayGame}
						>
							Jugar
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
};
