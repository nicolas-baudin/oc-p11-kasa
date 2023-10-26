import { useState, useEffect } from "react";
import style from "./Dropdown.module.scss";
import chevron from "../../assets/chevron.svg";
import PropTypes from "prop-types";

Dropdown.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
    list: PropTypes.array,
	type: PropTypes.string,
}

export default function Dropdown({ title, text, list, type }) {
	const [showText, setShowText] = useState(false);
	
	useEffect(() => {
		if(!showText) return;
		let timeout = setTimeout(() => setShowText(style.open), 0);
		return () => clearTimeout(timeout);
	}, [showText]);

	function handleClick() {
		setShowText((bool) => !bool);
	}

	return (
		<div className={`${style.dropdown} ${type === "row" ? style.rowDropDown : ""}`}>
			<div className={style.title} onClick={handleClick}>
				<h3 className={style.title__text}>{title}</h3>
				<img className={`${style.chevron} ${showText}`} src={chevron} alt="Icon Chevron"></img>
			</div>
			{showText && (
			<div className={`${style.text} ${showText}`}>
				{text ? (
					<p>{text}</p>
				) : (
					<ul>
						{list.map((li, k) => (
							<li key={k}>{li}</li>
						))}
					</ul>
				)}
			</div>
			)}
		</div>
	);
}