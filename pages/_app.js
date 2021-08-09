import { CacheProvider } from "@emotion/react";
import { useMediaQuery } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import Head from "next/head";
import PropTypes from "prop-types";
import * as React from "react";
import { createContext, useEffect, useState } from "react";
import Layout from "../src/components/Layout";
import Meta from "../src/components/Meta";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// state
export const SidebarToogleCtx = createContext();

const SidebarToogleProvider = ({ children }) => {
	const [toggleSidebar, setToggleSidebar] = useState(true);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [drawerWidth, setDrawerWidth] = useState(120);

	const theme = useTheme();
	const matched = useMediaQuery(theme.breakpoints.down("sm"));

	useEffect(() => {
		if (matched) {
			setDrawerWidth(0);
			setToggleSidebar(false);
		} else {
			setDrawerWidth(120);
			setToggleSidebar(true);
		}
	}, [matched, setDrawerWidth, setToggleSidebar]);

	const state = { toggleSidebar, setToggleSidebar, mobileOpen, setMobileOpen, drawerWidth, setDrawerWidth };

	return <SidebarToogleCtx.Provider value={state}>{children}</SidebarToogleCtx.Provider>;
};

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<Meta title="Gull-Dashboard" />
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
