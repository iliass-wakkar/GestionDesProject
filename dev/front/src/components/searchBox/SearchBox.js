import "./SearchBox.css";

// logic :

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { TextField } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "../../assets/icons/searchIcon.png";
import CitySearchInput from "../citySearchInput/CitySearchInput";
export default function SearchBox({ targetPageClass ="",className="" }) {
	return (
		<div className={`SearchBoxComponentClass ${targetPageClass} ${className}`}>
			<div className="Box">
				<LocationOnIcon className="locationIcon  full" />
				<CitySearchInput />
			</div>
			<div className="Box">
				<CalendarMonthIcon />

				<TextField
					type="date"
					InputLabelProps={{
						shrink: true, // Ensures the label stays above the input
					}}
					label="From"
					color="primary"
					placeholder="From"
				/>
			</div>
			<div className="Box">
				<CalendarMonthIcon />
				<TextField
					type="date"
					InputLabelProps={{
						shrink: true, // Ensures the label stays above the input
					}}
					label="To"
					color="primary"
					placeholder="To"
				/>
			</div>
			<div className="Box personBox Adults">
				<PersonIcon />
				<TextField type="number" label="Adults" placeholder="Adults" />
			</div>
			<div className="Box personBox Enfants">
				<PersonIcon />
				<TextField type="number" label="Children" placeholder="Children" />
			</div>
			<div className="Box searchBox">
				<img src={SearchIcon} className="searchIcon" width="40px" alt="" />
				<h3>Search</h3>
			</div>
		</div>
	);
}
