import { SocketProvider } from "@/context";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SocketProvider>
			<ThemeProvider theme={lightTheme}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<CssBaseline />
					<Component {...pageProps} />
				</LocalizationProvider>
			</ThemeProvider>
		</SocketProvider>
	);
}
