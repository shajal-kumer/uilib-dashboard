/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { styled } from "@material-ui/core/styles";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

const StyledListItemText = styled(ListItemText)({
	marginBottom: "0px",
	flex: "0 0 auto",
	opacity: "0",
	"& .MuiTypography-root": {
		fontSize: "14px",
	},
});
const StyledListItem = styled(ListItem)({
	borderRadius: "5px",
	flexDirection: "column",
	margin: "10px 0",
	cursor: "pointer",
	height: "75px",
	justifyContent: "center",
	alignItems: "center",
	"&:hover": {
		backgroundColor: "#7D48B1",
	},
	"&:hover .MuiListItemText-root": {
		opacity: "1",
	},
	"&.active": {
		backgroundColor: "#7D48B1",
	},
	"&.active .MuiListItemText-root": {
		opacity: "1",
	},
});
const StyledListItemIcon = styled(ListItemIcon)({
	minWidth: "auto",
});
const StyledAnchor = styled("a")({
	textDecoration: "none",
	color: "inherit",
});

export default function SingleSidebarItem({ icon, text, path }) {
	const iconName = icon.split(".")[0];
	const router = useRouter();

	return (
		<Link href={path} passHref>
			<StyledAnchor>
				<StyledListItem className={path === router.pathname ? "active" : null}>
					<StyledListItemIcon>
						<img src={`/${icon}`} alt={iconName} />
					</StyledListItemIcon>
					<StyledListItemText primary={text} />
				</StyledListItem>
			</StyledAnchor>
		</Link>
	);
}
