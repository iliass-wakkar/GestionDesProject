import "./InfoCardBox.css";
import emailIcon from "../../assets/icons/emailIcon.png";

export default function InfoCardBox({ icon, imgSrc, title, description, customClass = "" }) {
	return (
		<div className={`InfoCardBoxComponentClass ${customClass}`}>
            <div className="imgContainer">
			{imgSrc ? <img className="icon iconImg" src={imgSrc} alt={`img icon of ${title}`} /> : icon ? <icon className="icon iconIcon" /> : <img className="icon iconImg" src={emailIcon} alt={`img icon of ${title}`} />}
            </div>

			<div className="informationContainer">
				<h4 className="title">{title}</h4>
				<p className="description">{description}</p>

                
                

			</div>
		</div>
	);
}
