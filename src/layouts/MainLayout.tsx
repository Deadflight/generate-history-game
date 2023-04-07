import { Container } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main>
			<Container>{children}</Container>
		</main>
	);
};
