import style from "./Tag.module.scss";
import PropTypes from "prop-types";

Tags.propTypes = {
	name: PropTypes.string,
}

export default function Tags({ name }) {
	return <div className={style.tag}>{name}</div>;
}