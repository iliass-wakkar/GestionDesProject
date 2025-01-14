// internal  imports  :
import "./GuestExperienceCard.css";

// external imports :
import { Card } from "@mui/material";

export default function GuestExperienceCard({ guestExperience = "Guest Experience", profileImg, description = "Description", guestFullName = "fullName" }) {
	return (
		<Card className="GuestExperiencesCardComponentClass">
			<h1 className="experience">“{guestExperience}”</h1>
			<div className="clientProfile">
				<div className="leftSide">
					<img src={profileImg} loading="lazy" alt="guest profile image" />
				</div>
				<div className="rightSide">
					<h3 className="guestName">{guestFullName}</h3>
					<h4 className="description">{description}</h4>
				</div>
			</div>
		</Card>
	);
}
