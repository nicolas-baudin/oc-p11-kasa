import style from "./Banner.module.scss";
import PropTypes from "prop-types";

Banner.propTypes = {
	background: PropTypes.string,
	text: PropTypes.string,
}

export default function Banner({ background, text }) {
	const bannerBg = {"--bg-image": `url(${background})`};
	return (
		<div className={style.banner} style={bannerBg}>
			{text && <h2 className={style.title}>{text}</h2>}
		</div>
	);
}