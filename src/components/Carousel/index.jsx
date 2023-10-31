import { useState } from "react";
import styles from "./Carousel.module.scss";
import chevron from "../../assets/chevron.svg";
import PropTypes from "prop-types";

Carousel.propTypes = {
	Pictures: PropTypes.array,
}

export default function Carousel({ Pictures }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const nextPicture = () => {setCurrentIndex((prevIndex) => (prevIndex + 1) % Pictures.length);};
	const previousPicture = () => {setCurrentIndex((prevIndex) => (prevIndex - 1 + Pictures.length) % Pictures.length);};

	return (
		<div className={styles.imageSlider}>
			{Pictures.length > 1 && <button className={`${styles.buttons} ${styles.left}`} onClick={previousPicture}><img className={`${styles.chevron} ${styles.chevronLeft}`} src={chevron} alt="Chevron" /></button>}
			<img className={styles.slideImage} src={Pictures[currentIndex]} alt="Carousel" />
			{Pictures.length > 1 && <p className={styles.slideIndex}>{currentIndex + 1 + "/" + Pictures.length}</p>}
			{Pictures.length > 1 && <button className={`${styles.buttons} ${styles.right}`} onClick={nextPicture}><img className={styles.chevron} src={chevron} alt="Chevron" /></button>}
		</div>
	);
}