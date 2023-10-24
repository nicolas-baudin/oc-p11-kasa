import "./Footer.module.scss";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import logo from "../../assets/logo_footer.svg";

export default function Footer() {
	return (
		<footer>
			<Link to="/"><img src={logo} alt="Logo Kasa" /></Link>
			<p className={style.text}>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}