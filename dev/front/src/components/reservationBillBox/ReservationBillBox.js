import "./ReservationBillBox.css";
import defaultOfferImg from "../../assets/imgs/offer1.png";
import { Button } from "@mui/material";

export default function ReservationBillBox({ offerImg, hotelName = "Hotel name", customClass }) {
	return (
		<div className={`ReservationBillBoxComponentClass ${customClass}`}>
			<div className="imgContainer">{offerImg ? <img src={offerImg} alt={`offer reservation from hotel ${hotelName}`} /> : <img src={defaultOfferImg} alt={`offer reservation from hotel ${hotelName}`} />}</div>
			<div className="reservationInformationContainer">
				<h2 className="hotelName">{hotelName}</h2>
				<Button className="showBillButton">Show Bill</Button>
			</div>
		</div>
	);
}
