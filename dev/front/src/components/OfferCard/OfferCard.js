import "./OfferCard.css";
// external imports :
import PersonIcon from "@mui/icons-material/Person";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PersonsCounter from "../personsCounter/PersonsCounter";

export default function OfferCard({ offerImg, hotelName = "Hotel Name", price = 0, previousPrice = 0, alt = "offer image", nbrAdults = 2, nbrChildren = 1 }) {
	return (
		<div className="OfferCardComponentClass">
			<img src={offerImg} loading="lazy" alt={alt} />
			<div className="cardDetailsContainer">
				<h3 className="hotelName">{hotelName}</h3>
				<PersonsCounter  nbrAdults={nbrAdults} nbrChildren={nbrChildren} />
				<p>
					<span className="previousPrice">MAD {previousPrice}</span>

					<span className="currentPrice">MAD {price}</span>
				</p>
			</div>
		</div>
	);
}
