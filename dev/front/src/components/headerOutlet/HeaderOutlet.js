import React, { useState } from "react";
import "./HeaderOutlet.css";
import logo from "../../assets/logo.png";
import ThemeToggle from "../themeToggle/ToggleTheme";
import HeaderProfile from "../headerProfile/HeaderProfile";

// External imports:
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import OtherLinksBox from "./otherLinksBox/OtherLinksBox";

import { ManageAccounts as ManageAccountsIcon, Person } from "@mui/icons-material";
import { dropUserLs, getUserProfileImgLs, IsLoginLs } from "../../utils/LsUtils";


export default function HeaderOutlet({ customClass, profileImg = getUserProfileImgLs() }) {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const [loginStat, setLoginStat] = useState(IsLoginLs());
	const [otherLinksShowStat, setOtherLinksShow] = useState(false);
  let navigator = useNavigate(); 

	function logOut() {
		setLoginStat(false);
    dropUserLs(); 
    navigator("/"); 
    

	}

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	// Handle mouse enter event for "Other Links"
	const handleMouseEnterOtherLinks = () => {
		setOtherLinksShow(true);
	};

	// Handle mouse leave event for OtherLinksBox
	const handleMouseLeaveOtherLinksBox = () => {
		setOtherLinksShow(false);
	};

	const links = [
		[
			{ to: "/equipsManagement", icon: <Person />, text: "Equips Management" },
			{ to: "/profile", icon: <Person />, text: "profile" },
			{ to: "/ProjectsManagement", icon: <ManageAccountsIcon />, text: "Projects Management" },
		],
		[
			{ to: "/membersManagement", icon: <Person />, text: "Members Management" },

		],
	];

  
	return (
		<>
			<header className="HeaderOutletComponentClass">
				<div className="logoContainer">
					<Link to="/tasksManagement">
						<img src={logo} loading="lazy" alt="Logo" />
					</Link>
				</div>

				{/* Navigation for Desktop */}
				<nav className="desktopNav">
					<ul className="pagesList">
						<li>
							<Link to="/TasksManagement">TasksManagement</Link>
						</li>
					
						<li onMouseEnter={handleMouseEnterOtherLinks}>
							<Link>Other Links</Link>
						</li>
					</ul>
					<div className="controlButtons">
						{!loginStat && (
							<>
								<Link to="/">
									<Button variant="contained" color="primary">
										Login
									</Button>
								</Link>
							</>
						)}
						{loginStat && (
							<>
								<Button variant="contained" onClick={logOut} color="primary">
									SignOut
								</Button>
								<HeaderProfile profileImg={profileImg } />
							</>
						)}
						<ThemeToggle />
					</div>
				</nav>

				{/* Burger Menu for Mobile */}
				<div className="mobileMenu">
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
						<MenuIcon className="menuIcon" />
					</IconButton>
				</div>

				{/* Drawer for Mobile Navigation */}
				<Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
					<div className="drawerBox" sx={{ width: 250, padding: 2 }}>
						<div className="drawerHeader">
							<IconButton onClick={toggleDrawer}>
								<CloseIcon className="closeIcon" />
							</IconButton>
						</div>
						<ThemeToggle />
						<ul className="pagesList">
							<li>
								<Link to="/" onClick={toggleDrawer}>
								Tasks Management
								</Link>
							</li>
					
							<li>
								<Link onClick={() => setOtherLinksShow(!otherLinksShowStat)}>Other Links</Link>
							</li>
						</ul>
						<div className="controlButtons">
							{!loginStat && (
								<>
								
									<Link to="/">
										<Button variant="contained" color="primary">
											Login
										</Button>
									</Link>
								</>
							)}
							{loginStat && (
								<>
									<Button variant="contained" onClick={logOut} color="primary">
										SignOut
									</Button>
									<HeaderProfile profileImg={profileImg} />
								</>
							)}
						</div>
					</div>
				</Drawer>

				{/* OtherLinksBox with mouse leave event */}
				<OtherLinksBox customClass={otherLinksShowStat ? "activeOtherLinksBoxComponentClass" : ""} onMouseLeave={handleMouseLeaveOtherLinksBox} links={links} />
			</header>

			<Outlet />
		</>
	);
}
