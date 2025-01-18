import React, { useState } from "react";
import "./ProfileSection.css";
import SelectFilterBox from "./../../../../components/selectFilterBox/SelectFilterBox";
import { Button } from "@mui/material";
import InfoCardBox from "../../../../components/infoCardBox/InfoCardBox";
import userProfile from "../../../../assets/imgs/profile.png";

export default function ProfileSection() {
	const [formData, setFormData] = useState({
		firstName: "Zineb",
		lastName: "dg",
		gender: "M",
		phoneNumber: "2342223",
		language: "Fr",
	});

	const [isEditMode, setIsEditMode] = useState(false);

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSelectChange = (name, value) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleEditClick = () => {
		setIsEditMode(!isEditMode);
	};

	return (
		<div className="ProfileSectionComponentClass">
			<div className="profileContainer">
				<InfoCardBox title="User" description="User@gmail.com" customClass="ProfileSectionLargePhotoComponentClass" imgSrc={userProfile} />
				<Button variant="contained" onClick={handleEditClick}>
					{isEditMode ? "Cancel" : "Edit"}
				</Button>
			</div>
			<div className="formContainer">
				<div className="inputsContainer">
					<div className="inputGroup">
						<label className="inputLabel">First Name</label>
						<input className="inputField" placeholder="Your First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} readOnly={!isEditMode} />
					</div>
					<div className="inputGroup">
						<label className="inputLabel">Last Name</label>
						<input className="inputField" placeholder="Your Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} readOnly={!isEditMode} />
					</div>
					<div className="inputGroup">
						<label className="inputLabel">Poste</label>
						<input className="inputField" placeholder="Your Last Name" name="Poste" value={formData.lastName} onChange={handleInputChange} readOnly={!isEditMode} />
					</div>
			
					<div className="inputGroup">
						<label className="inputLabel">Phone Number</label>
						<input className="inputField" placeholder="Your Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} readOnly={!isEditMode} />
					</div>
					<div className="inputGroup">
						<label className="inputLabel">idEquipe</label>
						<SelectFilterBox selectData={["Arabic", "English", "French"]} selectName="Language" value={formData.language} onChange={(value) => handleSelectChange("language", value)} disabled={!isEditMode} />
					</div>
				</div>

				<Button variant="contained" className={`submitButton ${isEditMode ? "" : "hiddenVisibility"}`}>
					submit
				</Button>
			</div>
			<div className="emailSection">
				<h2>My email Address</h2>
				<InfoCardBox title="User@gmail.com" description="" />
			</div>
		</div>
	);
}
