import style from "./Tags.module.scss";
import Tag from "../Tag";
import PropTypes from "prop-types";

TagsList.propTypes = {
	tags: PropTypes.array,
}

export default function TagsList({ tags }) {
	return (
		<ul className={style.tags}>
			{tags.map((tag, k) => (
				<li key={k}>
					<Tag name={tag.name} />
				</li>
			))}
		</ul>
	);
}