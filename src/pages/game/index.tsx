import { MainLayout } from "@/layouts";
import { generateTopics } from "@/services";
import { HistoryTextGeneratedView, SelectPhrasesView } from "@/views";
import { Box, Container } from "@mui/material";
import React from "react";

const GamePage = () => {
	const click = async () => {
		const data = await generateTopics();

		console.log(data);
	};

	return (
		<MainLayout>
			<Container>
				<Box
					paddingTop={"20px"}
					display={"flex"}
					flexDirection={"column"}
					gap={2}
				>
					<button onClick={click}>Button</button>
					<SelectPhrasesView />
					<HistoryTextGeneratedView />
				</Box>
			</Container>
		</MainLayout>
	);
};

// // You should use getServerSideProps when:
// // - Only if you need to pre-render a page whose data must be fetched at request time
// import { GetServerSideProps } from "next";
// import { generateTopics } from "@/services";

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// 	const data = await generateTopics(); // your fetch function here

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// };

export default GamePage;
