import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import "./CitySearchInput.css"


import Select from "@mui/material/Select";
import "./CitySearchInput.css";
import Typography from "@mui/material/Typography";
// logic :
import { mrFrCities } from "../../utils/json";
import { useState } from "react";

export default function CitySearchInput() {
	const [cityName, setCityName] = useState("");

	const handleChange = (cityName, index) => {
		setCityName(cityName);
	};

	return (
		<div className=" CitySearchComponentClass ">
			
			
			<Select value={cityName}   className="selectInput" input={<OutlinedInput label="City" />} color="primary">
				{mrFrCities.map((city, index) => (
					<MenuItem key={city.city} value={city.city} onClick={() => handleChange(city.city, index)}>
						<Typography>{city.city}</Typography>
					</MenuItem>
				))}
			</Select>
		</div>
	);
}
