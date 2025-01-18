import "./OtherLinksBox.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function OtherLinksBox({ customClass, onMouseLeave, links }) {
	return (
		<div className={`OtherLinksBoxComponentClass ${customClass}`} onMouseLeave={onMouseLeave}>
			<div className="image">
				<img src={logo} alt="site logo" />
			</div>
			
			{links.map((group, groupIndex) => (
				<ul className="links" key={groupIndex}>
					{group.map((link, linkIndex) => (
						<li key={linkIndex}>
							<Link to={link.to}>
								{link.icon} 
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			))}
		</div>
	);
}
