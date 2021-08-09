import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import * as React from "react";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Monitor = () => {
	return (
		<>
			<Grid container spacing={3}>
				{data.map((item) => (
					<Grid key={item} item xs="12" sm="6" md="4" lg="3">
						<Card>
							<CardHeader
								avatar={
									<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
										R
									</Avatar>
								}
								action={
									<IconButton aria-label="settings">
										<MoreVertIcon />
									</IconButton>
								}
								title="Shrimp and Chorizo Paella"
								subheader="September 14, 2016"
							/>
							<CardMedia
								sx={{
									height: 0,
									paddingTop: "56.25%", // 16:9
								}}
								image="/paella.jpg"
								title="Paella dish"
							/>
							<CardContent>
								<Typography variant="body2">
									This impressive paella is a perfect party dish and a fun meal to cook together with
									your guests. Add 1 cup of frozen peas along with the mussels, if you like.
								</Typography>
							</CardContent>
							<CardActions>
								<IconButton aria-label="add to favorites">
									<FavoriteIcon />
								</IconButton>
								<IconButton aria-label="share">
									<ShareIcon />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Monitor;
