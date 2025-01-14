// internal imports :
import { WidthFull } from "@mui/icons-material";
import "./StatCard.css";

// external imports :
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function StatCard({ review = 5, category = "Category" }) {
	if (review < 1 || review > 10) review = 5;
	const reviewStat = review >= 6;
	return (
		<div className="StatCardComponentClass">
			<div className="StatInfo">
				<div className="categoryContainer">
					<h3>{category}</h3>
					{reviewStat ? <ArrowUpwardIcon className="reviewIcon" color="primary" /> : <ArrowDownwardIcon className="reviewIcon" color="warning" />}
				</div>
			</div>
			<div className={`progressDiv ${reviewStat ? (review === 10 ? "positive" : "semiPositive") : "negative"}`} review={review} style={{ width: `${review * 10}%` }}></div>
		</div>
	);
}
