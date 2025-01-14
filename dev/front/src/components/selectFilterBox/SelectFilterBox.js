import "./SelectFilterBox.css";
import { GoChevronDown } from "react-icons/go";

export default function SelectFilterBox({ selectData, selectName="SearchFilterName",customClass="" }) {
	return (
		<div className={`SelectFilterBoxComponentClass ${customClass}`}>
			<GoChevronDown className="downIcon" />
			<select name={selectName} >
				{ selectData && selectData.map((optionName,index) => (
					<option key={index} value={optionName}>{optionName}</option>
				))}
			</select>
		</div>
	);
}
