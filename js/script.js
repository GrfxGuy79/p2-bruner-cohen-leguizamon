// NAVBAR TOGGLE
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
const clientID = "MjExMTY5MDV8MTY0OTIwNTYzMS42ODI1NjMz";

hamburger.addEventListener("click", () => {
	navUL.classList.toggle("show");
});

// TOUR DATE
const params = new URLSearchParams(window.location.search);

var date = document.querySelector(".date");
var city = document.querySelector(".city");
var breadDate = document.querySelector(".breadDate");
var breadCity = document.querySelector(".breadCity");
var breadMobileCity = document.querySelector(".breadMobileCity");
var eventContent = document.querySelector(".eventMobileContent");
var desktoplocalEvents = document.querySelector(".desktopLocalEvents");
var mobilelocalEvents = document.querySelector(".mobileLocalEvents");

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

var acc = document.getElementsByClassName("accordion");
var accMobile = document.getElementsByClassName("accordionMobile");
var i;

if (params.has("city")) {
	var cityParam = params.get("city");
	var cityName = "";
	var state = "";
	if (cityParam == "nyc") {
		cityName = "New York City, NY";
		state = "NY";
	}
	if (cityParam == "mem") {
		cityName = "Memphis, TN";
		state = "TN";
	}
	if (cityParam == "atl") {
		cityName = "Atlanta, GA";
		state = "GA";
	}
	city.textContent = cityName;
	breadCity.textContent = cityName;
	breadMobileCity.textContent = "\u2039 " + cityName;

	fetch(
		"https://api.seatgeek.com/2/events?client_id=" +
			clientID +
			"&venue.state=" +
			state
	)
		.then(function (res) {
			return res.json();
		})
		.then(function (res) {
			desktoplocalEvents.innerHTML = printLocalEvents(res);
			mobilelocalEvents.innerHTML = printLocalEvents(res);
		});
}

if (params.has("date")) {
	var dateParam = params.get("date");
	var datetimeDate = new Date(dateParam);

	var finalDate =
		datetimeDate.getMonth() +
		1 +
		"." +
		datetimeDate.getDate() +
		"." +
		datetimeDate.getFullYear();
	var spelledOutDate =
		monthNames[datetimeDate.getMonth()] +
		" " +
		datetimeDate.getDate() +
		", " +
		datetimeDate.getFullYear();

	date.textContent = spelledOutDate;
	breadDate.textContent = finalDate;
}

if (params.has("dates")) {
	var datesParam = params.get("dates");
	var datesArray = datesParam.split(",");

	for (j = 0; j < datesArray.length; j++) {
		const newDiv = document.createElement("div");
		newDiv.className = "accordionMobile";

		var date = new Date(datesArray[j]);
		var spelledOutDate =
			monthNames[date.getMonth()] +
			" " +
			date.getDate() +
			", " +
			date.getFullYear();

		const newDivContent = i;
		newDiv.innerHTML =
			spelledOutDate + ' <span class="tickets">Tickets &#8250;</span>';

		const newPanelDiv = document.createElement("div");
		newPanelDiv.className = "panelMobile";
		newPanelDiv.innerHTML =
			'<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat dolorem unde assumenda dolore cupiditate. Adipisci esse debitis nesciunt? Sapiente praesentium corporis deleniti cumque minus sint, labore id! Animi, molestiae.</p><div class="purchase"><div><a href="#"><button>Buy Tickets</button></a></div></div>';

		const newPContent = document.createTextNode(
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat dolorem unde assumenda dolore cupiditate. Adipisci esse debitis nesciunt? Sapiente praesentium corporis deleniti cumque minus sint, labore id! Animi, molestiae."
		);

		eventContent.appendChild(newDiv);
		eventContent.appendChild(newPanelDiv);
	}

	for (i = 0; i < accMobile.length; i++) {
		accMobile[i].addEventListener("click", function () {
			var panelMobile = this.nextElementSibling;
			if (panelMobile.style.display === "flex") {
				panelMobile.style.display = "none";
			} else {
				panelMobile.style.display = "flex";
			}
		});
	}
}

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");

		var panel = this.nextElementSibling;
		if (panel.style.display === "flex") {
			panel.style.display = "none";
		} else {
			panel.style.display = "flex";
		}
	});
}

// Contact Us - Read More Button
function readmore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("aboutBtn");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

function printLocalEvents(res) {
	var localEventsHTML = "";
	for (var i = 0; i < res.events.length; i++) {
		localEventsHTML +=
			'<a href="' +
			res.events[i].url +
			'" target="_blank">' +
			res.events[i].short_title +
			'</a>';
	}
	return localEventsHTML;
}
