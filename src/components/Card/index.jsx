import style from "./Card.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Card.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string,
	background: PropTypes.string,
}

export default function Card({ title, id, background }) {
	const cardBg = {"--card-bg": `url(${background})`};
	return (
		<Link to={"/leasing/" + id} className={style.cards} style={cardBg}>
			<h2 className={style.title}>{title}</h2>
		</Link>
	);
}