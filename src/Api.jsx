export default class Api {
	async fetchLeasing() {
		const response = await fetch("/data.json");
		let data = await response.json();
		return data;
	}
}