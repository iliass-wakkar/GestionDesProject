import { Outlet } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import SearchInput from "../SearchInput/SearchInput";
import "./Header2Outlet.css";
import userProfile from "../../assets/imgs/profile.png";
import { MdOutlineNotificationsActive } from "react-icons/md";
import ThemeToggle from "../themeToggle/ToggleTheme";
import { Link } from "react-router-dom";
import { getUserProfileImgLs } from "../../utils/LsUtils";
export default function Header2Outlet({ customPageClass, title = "Welcome, User", profileImg=getUserProfileImgLs() }) {
	return (
		<>
			<div className={`Header2OutletComponentClass ${customPageClass}`}>
				<div className="leftSide">
					<div className="logoContainer">
						<Link to="/tasksManagement">
							<img src={logoImg} alt="" />
						</Link>
					</div>

					<div className="headerTitleContainer">
						<h1 className="headerTitle">{title}</h1>
					</div>
				</div>
				<div className="rightSide">
					<SearchInput customClass="searchInputProfileSectionComponentClass" />

					<div className="profileNotificationContainer">
						<div className="profileContainer">
							<Link to="/profile">
								<img src={profileImg ? profileImg : userProfile} alt="" />
							</Link>
						</div>
					</div>
				</div>
				<ThemeToggle />
			</div>
			<div className="Header2OutletContentComponentClass">
				<Outlet />
			</div>
		</>
	);
}
