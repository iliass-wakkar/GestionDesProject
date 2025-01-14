// internal imports :
import { useEffect } from "react";
import "./Profile.css";

// external imports :




import ProfileSection from "./components/profileSection/ProfileSection";

import { IsLoginLs } from "../../utils/LsUtils";
import { useNavigate } from "react-router-dom";


export default function Profile() {
	const navigate = useNavigate();
  useEffect(()=>{
			
		if(!IsLoginLs()){
			navigate("/");
		}

	 },[])
  


	return (
		<div className="ProfileComponentClass">
			<main className="mainContent">
		
           <ProfileSection />
			
			</main>
		</div>
	);
}
