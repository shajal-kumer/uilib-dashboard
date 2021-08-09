import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const StyledBox = styled(Box)(({ theme }) => ({
	padding: "10px 30px 30px",
	marginTop: `${theme.mixins.toolbar.minHeight}px`,
	flexGrow: 1,
	[theme.breakpoints.down("sm")]: {
		padding: "10px 15px 15px",
	},
}));

const Container = styled("div")({
	display: "flex",
});

const Layout = ({ children }) => {
	const [drawerWidth, setDrawerWidth] = useState(120);
	return (
		<Container>
			<Sidebar drawerwidth={drawerWidth} />
			<Navbar drawerwidth={drawerWidth} setDrawerWidth={setDrawerWidth} />
			<StyledBox component="main">{children}</StyledBox>
		</Container>
	);
};

export default Layout;
