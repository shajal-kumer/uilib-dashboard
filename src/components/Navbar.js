import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { styled } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Image from "next/image";
import * as React from "react";
import { useContext } from "react";
import { SidebarToogleCtx } from "../../pages/_app";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "20px",
	height: "50px",
	backgroundColor: theme.palette.text.secondary,
	width: "450px",
	marginLeft: 30,
	display: "flex",
	alignItems: "center",
	padding: "0 30px",
	[theme.breakpoints.down("sm")]: {
		height: "40px",
		marginLeft: "10px",
		padding: "0 20px",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	height: "100%",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: theme.palette.text.tertiary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "100%",
	marginLeft: "8px",

	"& .MuiInputBase-input": {
		fontSize: 12,
	},
}));

const StyledAppBar = styled(AppBar, { shouldForwardProp: (prop) => prop })(({ drawerwidth, theme }) => {
	return {
		width: `calc(100% - ${drawerwidth}px)`,
		"& .MuiToolbar-root": {
			padding: "0 30px",
			[theme.breakpoints.down("sm")]: {
				padding: "0 15px",
			},
		},
	};
});

const StyledBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	"& .MuiButtonBase-root": { marginLeft: "4px" },
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width: "60px",
	height: "58px",
	borderRadius: "20px",
	[theme.breakpoints.down("sm")]: {
		width: "50px",
		height: "48px",
		borderRadius: "10px",
	},
}));

const StyledBadge = styled(Badge)({
	"& .MuiBadge-badge": {
		top: "-2px",
		right: "-2px",
		minWidth: "12px",
		height: "12px",
		fontSize: "8px",
		padding: "0px",
		borderRadius: "50%",
	},
});

const StyledIconButton = styled(IconButton)({
	display: { xs: "none", sm: "inline-flex" },
});
const StyledAvatarIconButton = styled(IconButton)({
	marginRight: "-8px",
});

const Navbar = ({ drawerwidth, setDrawerWidth }) => {
	const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarToogleCtx);

	const handleToogleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
		if (isSidebarOpen) setDrawerWidth(0);
		else setDrawerWidth(120);
	};
	return (
		<Box>
			<StyledAppBar drawerwidth={drawerwidth} color="transparent" elevation={0} position="absolute">
				<Toolbar>
					<IconButton color="primary" onClick={handleToogleSidebar}>
						<Image src="/menu-icon.svg" alt="Menu Icon" width="16" height="13" />
					</IconButton>
					<Search>
						<SearchIconWrapper>
							<Image src="/search-icon.svg" alt="Search Icon" width="14" height="14" />
						</SearchIconWrapper>
						<StyledInputBase placeholder="Search…" />
					</Search>
					<Box sx={{ flexGrow: 1 }} />
					<StyledBox>
						<StyledIconButton color="primary">
							<Image src="/arrow-cross-icon.svg" alt="Search Icon" width="16" height="18" />
						</StyledIconButton>
						<StyledIconButton color="primary">
							<StyledBadge badgeContent={3} color="primary">
								<Image src="/bell-icon.svg" alt="Notification Icon" width="16" height="18" />
							</StyledBadge>
						</StyledIconButton>
						<StyledAvatarIconButton>
							<StyledAvatar src="/avatar.jpg" alt="Avatar image" />
						</StyledAvatarIconButton>
					</StyledBox>
				</Toolbar>
			</StyledAppBar>
		</Box>
	);
};

export default Navbar;
