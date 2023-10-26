import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Error404 from "../Error404";
import Carousel from "../../components/Carousel";
import LeasingInfos from "../../components/LeasingInfos";

import Api from "../../Api";

const api = new Api();

export default function Leasing() {
	const id = useParams().leasingId;
	const [leasing, setLeasing] = useState(null);
	const [error, setError] = useState(false);
	useEffect(() => {
		async function fetchLeasing() {
			const datas = await api.fetchLeasing();
			const checkLeasing = datas.find((leasing) => leasing.id === id);
			if (!checkLeasing) {
				setError(true);
			}
			setLeasing(checkLeasing);
		}
		fetchLeasing();
	}, [id]);

	if (leasing) {
		const Pictures = [...leasing.pictures];
		const Tags = leasing.tags.map((tag) => ({ name: tag }));
		const Dropdowns = [
			{ title: "Description", text: leasing.description },
			{ title: "Équipements", list: leasing.equipments },
		];
		return (
			<main>
				<Carousel Pictures={Pictures} />
				<LeasingInfos leasing={leasing} tags={Tags} dropdowns={Dropdowns} />
			</main>
		);
	} else if (error) {
		return <Error404 />;
	}
}