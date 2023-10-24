import style from "./Error404.module.scss";
import { Link } from "react-router-dom";

export default function Error404() {
	const message404 = "Oups! La page que vous demandez n'existe pas.";
	const messageLink = "Retourner sur la page d'accueil";
	return (
		<main className={style.error404}>
			<p className={style.error}>404</p>
			<p className={style.message}>{message404}</p>
			<Link to="/" className={style.link}>{messageLink}</Link>
		</main>
	);
}