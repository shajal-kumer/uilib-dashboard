import Grid from "@material-ui/core/Grid";
import { dashboardCards } from "../data/db";
import DashBoardSingleCard from "../src/components/DashBoardSingleCard";

export default function Home() {
	return (
		<Grid container spacing={3}>
			{dashboardCards.map((item) => (
				<Grid key={item.title} item xs={12} sm={6} md={4} lg={3}>
					<DashBoardSingleCard
						title={item.title}
						subtitle={item.subtitle}
						icon={item.icon}
						color={item.color}
						bgColor={item.bgColor}
					/>
				</Grid>
			))}
		</Grid>
	);
}
