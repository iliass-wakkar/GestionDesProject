import { TextField } from "@mui/material";

import { IoSearch } from "react-icons/io5";
import "./SearchInput.css";

export default function SearchInput({ placeholder = "Search" ,customClass }) {
	return (
		<div className={`searchInputComponentClass ${customClass}`}>
			<IoSearch className="searchIcon" />
			<input   placeholder={placeholder} />
		</div>
	);
}
