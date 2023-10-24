import styles from "./DropDownsList.module.scss";
import Dropdown from "../Dropdown";
import PropTypes from "prop-types";

DropdownsList.propTypes = {
	Dropdowns: PropTypes.array,
	type: PropTypes.string,
}

export default function DropdownsList({ Dropdowns, type }) {
	const dropdownListClassName = `${styles.dropDownsList}
	${type === "row" ? styles.flexDirection_row : styles.flexDirection_column}
	${type === "row" ? styles.alignItems_start : styles.alignItems_center}`;

	return (
		<ul className={dropdownListClassName}>
			{Dropdowns.map((dropdown, k) => (
				<li key={k}>
					<Dropdown title={dropdown.title} text={dropdown.text} lis={dropdown.lis} type={type} />
				</li>
			))}
		</ul>
	);
}