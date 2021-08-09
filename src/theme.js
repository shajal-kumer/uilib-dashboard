import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#663399",
		},
		secondary: {
			main: "#43454D",
		},

		text: {
			primary: "#43454D",
			secondary: "#fff",
			tertiary: "#949494",
		},
		success: {
			main: "#5DAE49",
		},
		warning: {
			main: "#FFC620",
		},
		info: {
			main: "#3981F7",
		},
		background: {
			default: "#F1F3F4",
		},
	},
	typography: {
		fontFamily: ['"Nunito Sans"', '"sans-serif"'].join(","),
		h2: {
			fontSize: "30px",
			fontWeight: "700",
		},
	},
	mixins: {
		toolbar: {
			minHeight: 90,
		},
	},
});

export default theme;
