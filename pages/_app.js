import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import PropTypes from "prop-types";
import * as React from "react";
import { createContext, useState } from "react";
import Layout from "../src/components/Layout";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// state
export const SidebarToogleCtx = createContext();

const SidebarToogleProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	return (
		<SidebarToogleCtx.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>{children}</SidebarToogleCtx.Provider>
	);
};

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>My page</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SidebarToogleProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SidebarToogleProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
