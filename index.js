const releaseDate = new Date(2024, 11, 12, 0, 0);
const counter = document.getElementById("counter");

function UpdateTimer() {
	let diffindays = releaseDate.getTime() - Date.now();
	let diff = Math.round(diffindays / (1000 * 3600 * 24));
	counter.innerText = diff + " days";

	console.log(diff + " days");

	setTimeout(() => {
		UpdateTimer();
	}, 1000);
}

document.addEventListener("DOMContentLoaded", UpdateTimer);
