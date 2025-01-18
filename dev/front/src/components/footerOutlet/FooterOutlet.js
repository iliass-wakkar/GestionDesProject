// internal imports :
import "./FooterOutlet.css";
import logo from "../../assets/logo.png";
//external imports :
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YoutubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function FooterOutlet({ targetPage = "" }) {
	return (
		<>
			{<Outlet />}
			<div className={`FooterOutletComponentClass ${targetPage} `}>
				<div className="leftSide">
					<img src={logo} alt="travel stay reservation platform logo" />
					<div className="socialContainer">
						<FacebookIcon />
						<LinkedInIcon />
						<YoutubeIcon />
						<InstagramIcon />
					</div>
				</div>

				<div className="rightSide">
					<ul>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link to="TasksManagement">Tasks Management</Link>
						</li>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link to="About">Profile</Link>
						</li>
					</ul>

					<ul>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link to="Login">Login</Link>
						</li>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link to="Events">Seasonal and holiday deals</Link>
						</li>
					</ul>

					<ul>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link to="Languages">Languages</Link>
						</li>
						<li>
							<KeyboardDoubleArrowRightIcon className="icon" />
							<Link to="Currency">Currency</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
