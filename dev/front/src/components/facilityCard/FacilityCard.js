// internal exports :
import "./FacilityCard.css";
export default function FacilityCard({ icon, text, isPopular = false }) {
	return (
		<div className={isPopular ? "PopularFacilityCardComponentClass" : "facilityCardComponentClass"}>
			{icon}
			<h4 className="facilityDescription">{text}</h4>
		</div>
	);
}
