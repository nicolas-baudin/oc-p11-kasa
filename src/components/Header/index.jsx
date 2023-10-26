import "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<Link to="/"><img src={logo} alt="Logo Kasa" /></Link>
			<ul>
				<li><NavLink to="/"
				className={({ isActive }) => isActive ? "active" : "inactive"}>
					Accueil
				</NavLink></li>
				<li><NavLink to="/about"
				className={({ isActive }) => isActive ? "active" : "inactive"}>
					À propos
				</NavLink></li>
			</ul>
		</header>
	);
}