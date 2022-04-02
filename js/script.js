// NAVBAR TOGGLE
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener("click", function () {
	links.classList.toggle("show_nav");
});

// TOUR DATE
const params = new URLSearchParams(window.location.search);

var date = document.querySelector(".date");
var city = document.querySelector(".city");
var breadDate = document.querySelector(".breadDate");
var breadCity = document.querySelector(".breadCity");

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

if (params.has("city")) {
	var cityParam = params.get("city");
	var cityName = "";
	if (cityParam == "nyc") {
		cityName = "New York City, NY";
	}
	if (cityParam == "mem") {
		cityName = "Memphis, TN";
	}
	if (cityParam == "atl") {
		cityName = "Atlanta, GA";
	}
	city.textContent = cityName;
	breadCity.textContent = cityName;
	//city.textContent = params.get('city');
}

//TODO: translate date and format differently
if (params.has("date")) {
	var dateParam = params.get("date");
	var dateTest = new Date(dateParam);
	console.log(dateTest);
	console.log(monthNames[dateTest.getMonth()]);

	var finalDate =
		dateTest.getMonth() +
		1 +
		"." +
		dateTest.getDate() +
		"." +
		dateTest.getFullYear();
	var spelledOutDate =
		monthNames[dateTest.getMonth()] +
		" " +
		dateTest.getDate() +
		", " +
		dateTest.getFullYear();

	date.textContent = spelledOutDate;
	breadDate.textContent = finalDate;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
		this.classList.toggle("active");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "flex") {
			panel.style.display = "none";
		} else {
			panel.style.display = "flex";
		}
	});
}
