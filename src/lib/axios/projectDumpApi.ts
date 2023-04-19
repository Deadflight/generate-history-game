import axios from "axios";

const projectDumpApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_PROJECTDUMP_API,
});

export default projectDumpApi;
