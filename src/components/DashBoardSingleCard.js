import { Grid, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/system";
import Image from "next/image";

const StyledPaper = styled(Paper)({
	padding: "20px 30px",
	borderRadius: "24px",
});
const StyledBox = styled(Box, { shouldForwardProp: (prop) => prop })(({ bgColor }) => ({
	width: "36px",
	height: "71px",
	borderRadius: "18px",
	backgroundColor: bgColor,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const StyledTitleTypography = styled(Typography)({
	fontSize: "14px",
	lineHeight: "1.5",
});
const StyledSubTitleTypography = styled(Typography, { shouldForwardProp: (prop) => prop })(({ theme, color }) => {
	return {
		fontSize: "30px",
		fontWeight: "bold",
		lineHeight: "1.2",
		color: `${theme.palette[color].main}`,
	};
});

export default function SingleCardItem({ title, subtitle, icon, color, bgColor }) {
	return (
		<StyledPaper elevation={0}>
			<Grid container alignItems="center">
				<Grid item>
					<StyledBox bgColor={bgColor}>
						<Image src={`/${icon}.svg`} width="20px" height="20px" alt="new lead icon" />
					</StyledBox>
				</Grid>
				<Grid item sx={{ marginLeft: "10px" }}>
					<StyledTitleTypography variant="subtitle1">{title}</StyledTitleTypography>
					<StyledSubTitleTypography color={color} variant="h2">
						{subtitle}
					</StyledSubTitleTypography>
				</Grid>
			</Grid>
		</StyledPaper>
	);
}
