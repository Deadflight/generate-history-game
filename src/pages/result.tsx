import React from "react";

const ResultPage = () => {
	return <div>result</div>;
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	// const { data } = await  // your fetch function here
	console.log(ctx.req.socket);

	return {
		props: {},
	};
};

export default ResultPage;
