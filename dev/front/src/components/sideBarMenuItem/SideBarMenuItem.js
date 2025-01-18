import "./SideBarMenuItem.css";
export default function SideBarMenuItem({ iconImg, IconComponent, title="item title",onClick ,customClass = "" }) {
	return (
		<div className={`SideBarMenuItemComponentClass ${customClass}`} onClick={onClick} >
			{IconComponent ? <IconComponent className="iconComponent icon" /> : <img src={iconImg} alt="icon" className="iconImg icon" />}
			<div className="titleContainer">
            <h4 className="title">{title}</h4>
            </div>
          
		</div>
	);
}
