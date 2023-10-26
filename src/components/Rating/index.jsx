import style from "./Rating.module.scss";
import Star from "../RatingStar";
import PropTypes from "prop-types";

Rating.propTypes = {
	rating: PropTypes.string,
}

export default function Rating({ rating }) {
	const RatingStars = Array.from({ length: 5 }, (_, i) => <Star color={i < rating ? "#ff6060" : "#e3e3e3"} key={i} />);
	return <div className={style.starsList}>{RatingStars}</div>;
}