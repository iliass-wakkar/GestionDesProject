// internal imports :
import "./PersonsCounter.css";
// external imports :
import PersonIcon from "@mui/icons-material/Person";
import ChildCareIcon from "@mui/icons-material/ChildCare";
export default function PersonsCounter({ nbrAdults, nbrChildren ,customClass}) {
	return (
		<div className={`PersonsCounterComponentClass ${customClass}`}>
			<div className="box adultsContainer">
				<PersonIcon />
				<h3 className="title">{nbrAdults}</h3>
			</div>
			<div className="box childrenContainer">
				<ChildCareIcon />
				<h3 className="title">{nbrChildren}</h3>
			</div>
		</div>
	);
}
