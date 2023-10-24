import { useState, useEffect } from 'react';
import "./Homepage.module.scss";
import Banner from "../../components/Banner";
import background from "../../assets/img/banner_home.png";
import CardsList from "../../components/Cardslist";
import Api from "../../Api";

const api = new Api();

export default function Homepage() {
	const [cards, setCards] = useState([]);
	useEffect(() => {
		async function fetchLeasing() {
			const datas = await api.fetchLeasing();
			setCards(datas);
		}
		fetchLeasing();
	}, []);
	
	return (
		<main>
			<Banner background={background} text="Chez vous, partout et ailleurs" />
			<CardsList cards={cards} />
		</main>
	);
}