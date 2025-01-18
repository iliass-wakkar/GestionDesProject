// internal imports  :
import "./OffersDetails.css";
import homeBack from "../../assets/imgs/homeBack.jpg";
import rating0_5 from "../../assets/imgs/0.5_star.png";
import { Link } from "react-router-dom";
import ProfileImg from "../../assets/imgs/profile.png";
import Profile1Img from "../../assets/imgs/profile1.png";
import Profile2Img from "../../assets/imgs/profile2.png";
import Profile3Img from "../../assets/imgs/profile3.png";
import FacilityCard from "../../components/facilityCard/FacilityCard";
import StatCard from "../../components/statCard/StatCard";
import PersonsCounter from "../../components/personsCounter/PersonsCounter";
import GuestReviewCard from "../../components/guestReviewCard/guestReviewCard";

// external imports :
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Container } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import SearchBox from "../../components/searchBox/SearchBox";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import CottageIcon from "@mui/icons-material/Cottage"; // homeIcon
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import WifiIcon from "@mui/icons-material/Wifi";
import PoolIcon from "@mui/icons-material/Pool";
import HotTubIcon from "@mui/icons-material/HotTub"; // private bathroom
import ShowerIcon from "@mui/icons-material/Shower";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"; // nice vue
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import LuggageIcon from "@mui/icons-material/Luggage"; // airport transport
import AcUnitIcon from "@mui/icons-material/AcUnit"; // air conditioning
import SmokeFreeIcon from "@mui/icons-material/SmokeFree"; // no smoking rooms

export default function OffersDetails() {
	return (
		<main className=" PageComponentClass OffersDetailsComponentClass">
			<Container maxWidth="xl" className="OffersDetailsComponentClassContainer">
				<SearchBox targetPageClass="OfferDetailsPage" className="searchBox " />
				<div className="sectionsOptionsContainer">
					<ul className="optionsList">
						<li className="currentSection">
							<a href="#overview">Overview</a>
						</li>
						<li>
							<a href="#offerInfoAndFacilities">offer Info & Facilities </a>
						</li>
						<li>
							<a href="#reviews">Guest Reviews</a>
						</li>
						<li>
							<a href="#offerAvailability">Availability</a>
						</li>
					</ul>
				</div>
				<section className="section mainSection" id="overview">
					<div className="header">
						<div className="leftSide">
							<div className="reviewContainer">
								<img className="statImg" src={rating0_5} alt="" />
								<Link to="About" className="newToMrBookingLink">
									New to MrBooking.com
								</Link>
							</div>
							<h1 className="offerTitle">Prestiga Golfside living Marrakech </h1>
							<PersonsCounter nbrAdults={2} nbrChildren={1} />
							<p className="offerLocation">
								<LocationOnIcon className="locationIcon " />
								Saphir prestigia golf, 40160 Marrakesh, Morocco
							</p>
						</div>

						<div className="rightSide">
							<div className="contentContainer">
								<FavoriteBorderIcon />
								<ShareIcon />
								<Button variant="contained">Reserve your apartment stay</Button>
								<h2 className="price">
									500 <span>DH</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="main">
						<div className="mainImgContainer">
							<div className="leftSide">
								<img src={homeBack} alt="" />
								<img src={homeBack} alt="" />
							</div>
							<div className="rightSide">
								<img src={homeBack} alt="" />
							</div>
						</div>
						<div className="imgScrollerParent">
							<div className="leftArrowContainer">
								<KeyboardArrowLeftIcon className="arrowIcon" />
							</div>
							<div className="imgScrollerContainer">
								<img src={homeBack} className="currentImg" alt="" />
								<img src={homeBack} alt="" />
								<img src={homeBack} alt="" />
								<img src={homeBack} alt="" />
								<img src={homeBack} alt="" />
								<img src={homeBack} alt="" />
								<img src={homeBack} className="currentImg" alt="" />
								<img src={homeBack} alt="" />
								<img src={homeBack} alt="" />
								<img src={homeBack} alt="" />
								<img src={homeBack} alt="" />
								<img src={homeBack} alt="" />
							</div>
							<div className="rightArrowContainer">
								<KeyboardArrowRightIcon className="arrowIcon" />
							</div>
						</div>
					</div>
				</section>
				<section className="section offerInfoFacilities" id="offerInfoAndFacilities">
					<div className="facilitiesContainer">
						<FacilityCard icon={<CottageIcon />} text="The entire place is yours" />
						<FacilityCard icon={<RestaurantIcon />} text="On-site restaurant" />
						<FacilityCard icon={<LocalParkingIcon />} text="Free parking available" />
						<FacilityCard icon={<WifiIcon />} text="Free Wi-Fi" />
						<FacilityCard icon={<PoolIcon />} text="Swimming pool" />
						<FacilityCard icon={<HotTubIcon />} text="Private bathroom" />
						<FacilityCard icon={<ShowerIcon />} text="Hot shower available" />
						<FacilityCard icon={<FamilyRestroomIcon />} text="Family-friendly restrooms" />
						<FacilityCard icon={<RemoveRedEyeIcon />} text="Nice view from the property" />
						<FacilityCard icon={<CleaningServicesIcon />} text="Daily housekeeping" />
						<FacilityCard icon={<LuggageIcon />} text="Airport transport available" />
						<FacilityCard icon={<AcUnitIcon />} text="Air conditioning in rooms" />
						<FacilityCard icon={<SmokeFreeIcon />} text="No smoking rooms" />
					</div>
					<div className="InfoContainer">
						<div className="offerDescriptionParent">
							<h1 className="secondaryTitle">Offer Description</h1>
							<div className="offerDescriptionContainer">
								A recently renovated apartment, Prestigia Golfside Living Marrakech offers accommodations in Marrakesh. The air- conditioned accommodation is 1.4 miles from Menara Gardens, and guests can benefit from on-site private parking and complimentary Wifi. Koutoubia is 2.8 miles away and Bahia Palace is 3.1 miles from the apartment.
								<br />
								<br />
								Offering a terrace and mountain views, the spacious apartment includes 3 bedrooms, a living room, satellite flat- screen TV, an equipped kitchen, and 2 bathrooms with a walk-in shower. Towels and bed linen are offered in the apartment. The property has an outdoor dining area.
								<br />
								<br />
								In addition to a year-round outdoor pool, the apartment also offers kids pool. Djemaa El Fna is 2.6 miles from Prestigia Golfside Living Marrakech, while Marrakesh Train Station is 2.7 miles from the property. Marrakech-Menara Airport is 0.6 miles away.
							</div>
						</div>
						<div className="hotelInfoParent">
							<h1 className="secondaryTitle">hotel Description</h1>
							<div className="hotelInfoContainer">
								<div className="profileContainer">
									<img src={ProfileImg} alt="hotel logo" />
									<div className="infoContainer">
										<h2 className="hotelName">Pamas Logen</h2>
										<div className="hotelDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis beatae voluptatem distinctio magni ratione dignissimos commodi? Rerum ullam, possimus minima error laboriosam quas eos dolore voluptatibus architecto mollitia est et.</div>
									</div>
								</div>

								<div className="mostPopularFacilitiesParent">
									<FacilityCard isPopular={true} icon={<AcUnitIcon />} text="Air conditioning in rooms" />
									<FacilityCard isPopular={true} icon={<SmokeFreeIcon />} text="No smoking rooms" />
									<FacilityCard isPopular={true} icon={<RestaurantIcon />} text="On-site restaurant" />
									<FacilityCard isPopular={true} icon={<LocalParkingIcon />} text="Free parking available" />
									<FacilityCard isPopular={true} icon={<WifiIcon />} text="Free Wi-Fi" />
									<FacilityCard isPopular={true} icon={<PoolIcon />} text="Swimming pool" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section guestReviews" id="reviews">
					<div className="header">
						<div className="headerInfo">
							<h2 className="secondaryTitle"> Guest reviews</h2>
							<div className="reviewsSome">
								<h3 className="averageRating">9.7</h3>
								<h3>
									Exceptional <span>3 reviews</span>
								</h3>
							</div>
						</div>
						<div className="controlButtons">
							<Button variant="outlined">See Availability</Button>
						</div>
					</div>
					<div className="reviewStatistics">
						<div className="StatisticsContainer">
							<StatCard review={10} category="Staff" />
							<StatCard review={10} category="Facilities" />
							<StatCard review={10} category="Cleanliness" />
							<StatCard review={10} category="Comfort" />
							<StatCard review={9.2} category="Value of money" />
							<StatCard review={4} category="Location" />
						</div>
					</div>
					<div className="guestReviewsCardParent">
						<div className="guestReviewsCardContainer">
							<GuestReviewCard fullName="Ayoub Majid" profileImg={Profile1Img} />
							<GuestReviewCard fullName="Amine" profileImg={Profile2Img} />
							<GuestReviewCard fullName="Amina rouk" profileImg={Profile3Img} />
						</div>

						<Button variant="outlined" className="readMoreReviewsBtn">
							Read more Reviews
						</Button>
					</div>
				</section>

				<section className="section offerAvailability" id="offerAvailability">
					<h2 className="secondaryTitle">Availability</h2>
					<div className="availabilityContainer">
						<div className="availabilityHeader">
							<h3 className="headerLabel">Accommodation Type</h3>
							<h3 className="headerLabel">Number of Travelers</h3>
							<h3 className="headerLabel">Price</h3>
							<h3 className="headerLabel">Reserve</h3>
						</div>

						<div className="availabilityList">
							{/* Room 1 */}
							<div className="availabilityItem">
								<div className="roomType">
									<h4 className="roomName">Double Deluxe Room</h4>
									<p className="roomDescription">1 very large double bed</p>
								</div>
								<div className="travelersInfo">
									<div className="travelersCount">
										<PersonsCounter customClass="PersonCounterRedTitleComponentClass" nbrAdults={2} nbrChildren={1} />
									</div>
								</div>
								<div className="priceInfo">
									<p className="price">1800 DH</p>
								</div>
								<Button variant="outlined">Reserve</Button>
							</div>

							{/* Room 2 */}
							<div className="availabilityItem">
								<div className="roomType">
									<h4 className="roomName">Double Prestige Room with Pool View</h4>
									<p className="roomDescription">1 very large double bed</p>
								</div>
								<div className="travelersInfo">
									<div className="travelersCount">
										<PersonsCounter customClass="PersonCounterRedTitleComponentClass" nbrAdults={2} nbrChildren={2} />
									</div>
								</div>
								<div className="priceInfo">
									<p className="price">2200 DH</p>
								</div>
								<Button variant="outlined">Reserve</Button>
							</div>

							{/* Room 3 */}
							<div className="availabilityItem">
								<div className="roomType">
									<h4 className="roomName">Prestige Suite 1 Double Bedroom - Pool View</h4>
									<p className="roomDescription">1 very large double bed</p>
								</div>
								<div className="travelersInfo">
									<div className="travelersCount">
										<PersonsCounter customClass="PersonCounterRedTitleComponentClass" nbrAdults={3} nbrChildren={1} />
									</div>
								</div>
								<div className="priceInfo">
									<p className="price">3000 DH</p>
								</div>
								<Button variant="outlined">Reserve</Button>
							</div>

							{/* Room 4 */}
							<div className="availabilityItem">
								<div className="roomType">
									<h4 className="roomName">Prestige Suite 2 Double Bedrooms - Pool View</h4>
									<p className="roomDescription">
										Bedroom 1: 1 very large double bed
										<br />
										Bedroom 2: 2 single beds
									</p>
								</div>
								<div className="travelersInfo">
									<div className="travelersCount">
										<PersonsCounter customClass="PersonCounterRedTitleComponentClass" nbrAdults={2} nbrChildren={1} />
									</div>
								</div>
								<div className="priceInfo">
									<p className="price">4500 DH</p>
								</div>
								<Button variant="outlined">Reserve</Button>
							</div>
						</div>
					</div>
				</section>
			</Container>
		</main>
	);
}
