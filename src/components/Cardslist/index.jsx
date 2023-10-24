import style from "./CardsList.module.scss";
import Card from "../Card";
import PropTypes from "prop-types";

CardsList.propTypes = {
	cards: PropTypes.array,
}

export default function CardsList({ cards }) {
	return (
		<ul className={style.cardsList}>
			{cards.map((card) => (
				<li key={card.id}>
					<Card title={card.title} background={card.cover} id={card.id} />
				</li>
			))}
		</ul>
	);
}