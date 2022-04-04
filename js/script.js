const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
const params = new URLSearchParams(window.location.search);

var date = document.querySelector('.date');
var city = document.querySelector('.city');
var breadDate = document.querySelector('.breadDate');
var breadCity = document.querySelector('.breadCity');
var breadMobileCity = document.querySelector('.breadMobileCity');
var eventContent = document.querySelector('.eventMobileContent');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var acc = document.getElementsByClassName("accordion");
var accMobile = document.getElementsByClassName("accordionMobile");
var i;

if(params.has('city')){
    var cityParam = params.get('city');
    var cityName = '';
    if(cityParam == 'nyc'){
        cityName = 'New York City, NY';
    }
    if(cityParam == 'mem'){
        cityName = 'Memphis, TN';
    }
    if(cityParam == 'atl'){
        cityName = 'Atlanta, GA';
    }
    city.textContent = cityName;
    breadCity.textContent = cityName;
    breadMobileCity.textContent = '\u2039 '+cityName;
}

if(params.has('date')){
    var dateParam = params.get('date');
    var date = new Date(dateParam);

    var finalDate = (date.getMonth()+1)+'.'+date.getDate()+'.'+date.getFullYear();
    var spelledOutDate = monthNames[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();

    date.textContent = spelledOutDate;
    breadDate.textContent = finalDate;
}

if(params.has('dates')){
    var datesParam = params.get('dates');
    var datesArray = datesParam.split(',');

    for (j = 0; j < datesArray.length; j++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'accordionMobile';

        var date = new Date(datesArray[j]);
        var spelledOutDate = monthNames[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();

        const newDivContent = i
        newDiv.innerHTML = spelledOutDate+' <span class="tickets">Tickets &#8250;</span>';

        const newPanelDiv = document.createElement('div');
        newPanelDiv.className = 'panelMobile';
        newPanelDiv.innerHTML = '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat dolorem unde assumenda dolore cupiditate. Adipisci esse debitis nesciunt? Sapiente praesentium corporis deleniti cumque minus sint, labore id! Animi, molestiae.</p><div class="purchase"><div><a href=#>Buy Tickets</a></div></div>';
   
        const newPContent = document.createTextNode('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat dolorem unde assumenda dolore cupiditate. Adipisci esse debitis nesciunt? Sapiente praesentium corporis deleniti cumque minus sint, labore id! Animi, molestiae.');

        eventContent.appendChild(newDiv);
        eventContent.appendChild(newPanelDiv);
 
      }

      for (i = 0; i < accMobile.length; i++) {
        accMobile[i].addEventListener("click", function() {
      
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
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
  
      var panel = this.nextElementSibling;
      if (panel.style.display === "flex") {
        panel.style.display = "none";
      } else {
        panel.style.display = "flex";
      }
    });
  }

navToggle.addEventListener("click", function () {
	links.classList.toggle("show_nav");
});

// read more read less button
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
