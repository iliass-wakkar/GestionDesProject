import "./App.css";

// lib imports :  ----------------
// external :
import { Route, Routes, useLocation } from "react-router-dom";

// internal :
import { loadTheme } from "./styles/theme";
import { ThemeProvider } from "@mui/material";

import HeaderOutlet from "./components/headerOutlet/HeaderOutlet";
import FooterOutlet from "./components/footerOutlet/FooterOutlet";

import { useEffect, useState } from "react";
import { ThemeContext } from "@emotion/react";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

import Header2Outlet from "./components/header2Outlet/Header2Outlet.js";
import TasksManagement from "./pages/tasksManagement/TasksManagement.js";

function App() {
	const location = useLocation();
	const [themeStat, setThemeStat] = useState(loadTheme());
	function switchTheme() {
		setThemeStat(loadTheme());
	}

	useEffect(() => {
		switchTheme();
	}, []);

	const isOffersDetailsPage = location.pathname.includes("offersDetails");

	return (
		<ThemeContext.Provider value={{ switchTheme }}>
			<ThemeProvider theme={themeStat}>
				<div className="App">
					<Routes>
						<Route element={<HeaderOutlet />}>
							<Route element={<FooterOutlet targetPage={`${isOffersDetailsPage ? "isOffersDetailsPage" : ""}`} />}>
								{/* <Route path="HotelSpace" element={<Home />} /> */}
								<Route path="TasksManagement" element={<TasksManagement />} />
							</Route>
						</Route>
						<Route element={<Header2Outlet />}>
							<Route path="Profile" element={<Profile />} />
						
					
						</Route>
						
						<Route path="/" element={<Login />} />
					
					</Routes>
				</div>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export default App;
