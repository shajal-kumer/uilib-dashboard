import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { styled } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React, { useContext } from "react";
import { sidebarListItems } from "../../data/db";
import { SidebarToogleCtx } from "../../pages/_app";
import SidebarSingleMenu from "./SidebarSingleMenu";

const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop })(({ drawerwidth, visibility, theme }) => ({
	width: drawerwidth,
	visibility: visibility,
	"& .MuiDrawer-paper": {
		color: theme.palette.text.secondary,
		backgroundColor: theme.palette.primary.main,
		width: "inherit",
		padding: "0 13px",
		justifyContent: "start",
		position: "static",
	},
}));

const StyledList = styled(List)({
	padding: "10px 0",
});
const StyledTypography = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
}));

const StyledAnchor = styled("a")({
	color: "inherit",
	textDecoration: "none",
});
const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "center",
});

const Sidebar = () => {
	const { drawerWidth, toggleSidebar } = useContext(SidebarToogleCtx);

	return (
		<>
			<StyledDrawer anchor="left" open={toggleSidebar} variant="persistent" drawerwidth={drawerWidth}>
				<StyledToolbar>
					<StyledTypography variant="h2">
						<Link href="/" passHref>
							<StyledAnchor>Gull</StyledAnchor>
						</Link>
					</StyledTypography>
				</StyledToolbar>
				<StyledList>
					{sidebarListItems.map(({ id, icon, text, path }) => (
						<SidebarSingleMenu key={id} icon={icon} text={text} path={path} />
					))}
				</StyledList>
			</StyledDrawer>
		</>
	);
};

export default Sidebar;
