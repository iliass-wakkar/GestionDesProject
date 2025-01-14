// internal imports ;
import React, { useState, useEffect } from "react";
import "./ToggleTheme.css";

import { useContext } from "react";
import { ThemeContext } from "@emotion/react";

// external imports :
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
const ThemeToggle = ({customClass}) => {
	const [theme, setTheme] = useState("light");

	const { switchTheme } = useContext(ThemeContext);

	function handleSwitchTheme(newTheme) {
		setTheme(newTheme);
		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
	}

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light";
		setTheme(savedTheme);
		document.documentElement.setAttribute("data-theme", savedTheme);
	}, []);

	function handleToggle() {
		const newTheme = theme === "dark" ? "light" : "dark";
		handleSwitchTheme(newTheme);
    switchTheme();

	}

	return (
		<div className={`switchThemeContainer ${customClass}`} onClick={handleToggle}>
			{theme === "light" ? <WbSunnyIcon className="icon lightIcon" /> : <BedtimeIcon className="icon darkIcon" />}
		</div>
	);
};

export default ThemeToggle;
