import style from "./LeasingInfos.module.scss";
import Tags from "../Tags";
import Rating from "../Rating";
import DropdownsList from "../DropdownsList";
import PropTypes from "prop-types";

LeasingInfos.propTypes = {
	leasing: PropTypes.object,
	tags: PropTypes.array,
    dropdowns: PropTypes.array,
}

export default function LeasingInfos({ leasing, tags, dropdowns }) {
	return (
		<>
			<div className={style.infos}>
				<div className={style.left}>
					<div className={style.top}>
						<h1 className={style.title}>{leasing.title}</h1>
						<h2 className={style.location}>{leasing.location}</h2>
					</div>
					<div className={style.bot}>
						<Tags tags={tags} />
					</div>
				</div>
				<div className={style.right}>
					<div className={style.top}>
						<p className={style.owner}>{leasing.host.name}</p>
						<img src={leasing.host.picture} className={style.profilePicture} alt="Host"></img>
					</div>
					<div className={style.bot}>
						<Rating rating={leasing.rating} />
					</div>
				</div>
			</div>
			<DropdownsList dropdowns={dropdowns} type={"row"} />
		</>
	);
}