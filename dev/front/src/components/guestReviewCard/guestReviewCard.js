// internal imports : 
import defaultProfileImg from "../../assets/imgs/profile.png";
import "./GuestReviewCard.css"
export default function GuestReviewCard({ profileImg = defaultProfileImg, fullName = "full name", description = "description" }) {
	return (
		<div className="GuestReviewCardComponentClass">
			<div className="profileContainer">
				<div className="imgContainer">
					<img src={profileImg} alt="profile img" />
				</div>
				<h2 className="fullName">{fullName}</h2>
			</div>
			<div className="descriptionContainer">
				<p className="description">{description}</p>
			</div>
		</div>
	);
}
