// internal imports :
import "./HeaderProfile.css";
import defaultImg from "../../assets/imgs/profile.png";

// external imports : 
import { Link } from "react-router-dom";
export default function HeaderProfile({ profileImg }) {
	return (
		<div className="HeaderProfileClassName">
			<Link to="/Profile">
			<img src={profileImg ? profileImg : defaultImg} alt="the client profile image" />
			</Link>
		
		</div>
	);
}
