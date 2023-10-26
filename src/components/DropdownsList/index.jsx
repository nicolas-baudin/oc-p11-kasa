import styles from "./DropDownsList.module.scss";
import Dropdown from "../Dropdown";
import PropTypes from "prop-types";

DropdownsList.propTypes = {
	dropdowns: PropTypes.array,
	type: PropTypes.string,
}

export default function DropdownsList({ dropdowns, type }) {
	const dropdownListClass = `${styles.dropDownsList}
	${type === "row" ? styles.flexDirection_row : styles.flexDirection_column}
	${type === "row" ? styles.alignItems_start : styles.alignItems_center}`;

	return (
		<ul className={dropdownListClass}>
			{dropdowns.map((dropdown, k) => (
				<li key={k}>
					<Dropdown title={dropdown.title} text={dropdown.text} list={dropdown.list} type={type} />
				</li>
			))}
		</ul>
	);
}