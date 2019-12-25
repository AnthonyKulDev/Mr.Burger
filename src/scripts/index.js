//Hamburger-menu
const hamburgerMenuLink = document.querySelector('.hamburger-menu-link');
const hamburgerMenuItem = document.querySelector('.nav__item');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const closeButton = document.querySelector('.hamburger-menu__close');

hamburgerMenuLink.addEventListener('click', function () {
  hamburgerMenu.classList.add('hamburger-menu_visible');
});
hamburgerMenuItem.addEventListener('click', function () {
  setTimeout(function () {
    hamburgerMenu.classList.remove('hamburger-menu_visible');     
  }, 30);
});
closeButton.addEventListener('click', function() {
  setTimeout(function () {
    hamburgerMenu.classList.remove('hamburger-menu_visible');     
  }, 30);
});

// Slider
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector(".slider__items");

const minRight = 0;
const maxRight = 200;
const step = 100;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function(e) {
  e.preventDefault();
  // loop("right", e);
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + '%';
  }
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  // loop("left", e);
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + '%';
  }
});

// function loop(direction, e) {
//   e.preventDefault();
//   if (direction === "right") {
//     items.appendChild(items.firstElementChild);
//   } else {
//     items.insertBefore(items.lastElementChild, items.firstElementChild);
//   }
// }

//Accordeon
  //Team
  var teamItem = document.querySelectorAll('.team__item'),
    activeTeamItem = document.getElementsByClassName('team__item--active');

  Array.from(teamItem).forEach(function(item, i, teamItem) {
    item.addEventListener('click', function(e) {
      
      if (activeTeamItem.length > 0 && activeTeamItem[0] !== this) 
        activeTeamItem[0].classList.remove('team__item--active'); 

      this.classList.toggle('team__item--active');
    });
  });
  //Menu

  var menuItem = document.querySelectorAll('.menu-acco__item'),
    activeMenuItem = document.getElementsByClassName('menu-acco__item--active');

  Array.from(menuItem).forEach(function(item, i, menuItem) {
    item.addEventListener('click', function(e) {
      
      if (activeMenuItem.length > 0 && activeMenuItem[0] !== this) 
        activeMenuItem[0].classList.remove('menu-acco__item--active'); 

      this.classList.toggle('menu-acco__item--active');
    });
  });

//Overlay_reviews

const openButton = document.querySelectorAll("div.reviews__button");
const overlayElement = document.querySelector(".overlay");

openButton.forEach(function(element) {
  element.addEventListener("click", function() {
    overlayElement.style.display = "flex";
  });
});

const closeElement = overlayElement.querySelector(".overlay__close");
closeElement.addEventListener("click", function(e) {
  e.preventDefault();
  overlayElement.style.display = "none";
});

overlayElement.addEventListener("click", function(e) {
  if (e.target === overlayElement) {
    closeElement.click();
  }
});

//SendForm

const myForm = document.querySelector(".form");
const send = document.querySelector(".btn--submit");
const formPopup = document.querySelector(".form-popup");
const closeFormPopup = document.querySelector(".form-popup__close")
const popupText = document.querySelector(".form-popup__text");

send.addEventListener("click", event => {
  event.preventDefault();
  let formData = new FormData();
  formData.append('name', myForm.elements.name.value);
  formData.append('phone', myForm.elements.phone.value);
  formData.append('comment', myForm.elements.comment.value);
  formData.append('to', 'coolaa6785@gmail.com');
  console.log(formData);

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.send(formData);
  xhr.addEventListener('load', () => {
    if (xhr.response.status) {
      popupText.textContent = xhr.response.message;
      formPopup.style.display = "flex";
      myForm.reset();
    }
    else {
      popupText.textContent = xhr.response.message;
      formPopup.style.display = "flex";
    }
  });
});

closeFormPopup.addEventListener("click", function(e) {
  e.preventDefault();
  formPopup.style.display = "none";
});

formPopup.addEventListener("click", function(e) {
  if (e.target === formPopup) {
    closeFormPopup.click();
  }
});

//OnePageScroll

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	navigation: true,
	scrollHorizontally: true,
	anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage']
});

//Map
var marks = [
	[55.76044161638499, 37.64023603439329],
	[55.760078644376165, 37.63412059783933],
	[55.75659394045875, 37.642038478851305],
	[55.763236387210114, 37.63716758728025]
];
// Функция ymaps.ready() будет вызвана, когда
		// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
				});
				var clusterer = new ymaps.Clusterer();
				myMap.geoObjects.add(clusterer);
		
				myMap.events.add('click', function (e) {
						// Получение координат щелчка
						var coords = e.get('coords');
						console.log(coords);
		
						createPlacemark(coords)
				});
		
				function createPlacemark(coords) {
						var myPlacemark = new ymaps.Placemark(coords, {
								hintContent: 'Собственный значок метки',
								balloonContent: coords
						}, {
								// Опции.
								// Необходимо указать данный тип макета.
								iconLayout: 'default#image',
								// Своё изображение иконки метки.
								iconImageHref: '../src/images/icons/map-marker.svg',
								// Размеры метки.
								iconImageSize: [46, 57],
								// Смещение левого верхнего угла иконки относительно
								// её "ножки" (точки привязки).
								iconImageOffset: [-23, -70]
						});
		
						clusterer.add(myPlacemark);
				}
		
				marks.forEach(function (coords) {
						createPlacemark(coords);
				});
		}

//VideoHTML5API

// получаем все элементы
var videoEl = document.getElementsByTagName('video')[0],
playBtn = document.getElementById('playBtn'),
vidControls = document.getElementById('controls'),
volumeControl = document.getElementById('volume'),
timePicker = document.getElementById('timer');
timeline = document.getElementsByClassName('player__playback')[0],
timelineProgress = document.getElementsByClassName('player__progress')[0],
drag = document.getElementsByClassName('player__playback-button')[0];


// если браузер может воспроизводить видео удаляем класс
videoEl.addEventListener('canplaythrough', function () {
  onPlayerReady();

vidControls.classList.remove('hidden');
videoEl.volume = volumeControl.value;
}, false);
// запускам или останавливаем воспроизведение
playBtn.addEventListener('click', function () {
if (videoEl.paused) {
    videoEl.play();
} else {
    videoEl.pause();
}
}, false);

videoEl.addEventListener('play', function () {
  $(".player__splash-icon").css({
    display: 'none'
  });

  $(".player__splash").css({
    display: 'none'
  });

  playBtn.classList.add('paused');
}, false);

videoEl.addEventListener('pause', function () {
  $(".player__splash-icon").css({
    display: 'block'
  });
  $(".player__splash").css({
    display: 'flex'
  });
playBtn.classList.remove('paused');
}, false);

volumeControl.addEventListener('input', function () {

videoEl.volume = volumeControl.value;
}, false);

videoEl.addEventListener('ended', function () {
videoEl.currentTime = 0;
}, false);

videoEl.addEventListener('timeupdate', function () {
timePicker.innerHTML = formatTime(videoEl.currentTime);
}, false);

const onPlayerReady = () => {
  let interval;
  let durationSec = videoEl.duration;

  if (typeof interval !== "undefined") {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = videoEl.currentTime;
    const completedPercent = (completedSec / durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`
    });
  }, 1000);
};

const eventsInit = () => {
  $(".player__playback").on("click", e => {
    const bar = $(e.currentTarget);
    const newButtonPosition = e.pageX - bar.offset().left;
    const buttonPosPercent = (newButtonPosition / bar.width()) * 100;
    const newPlayerTimeSec = (videoEl.duration / 100) * buttonPosPercent;

    $(".player__playback-button").css({
      left: `${buttonPosPercent}%`
    });

    videoEl.currentTime = newPlayerTimeSec;
  });

  $(".player__splash").on("click", e => {
    videoEl.play();
  });
};

// рассчет отображаемого времени
function formatTime(time, hours) {
  if (hours) {
      var h = Math.floor(time / 3600);
      time = time - h * 3600;
                  
      var m = Math.floor(time / 60);
      var s = Math.floor(time % 60);
                  
      return h.lead0(2)  + ":" + m.lead0(2) + ":" + s.lead0(2);
  } else {
      var m = Math.floor(time / 60);
      var s = Math.floor(time % 60);
                  
      return m.lead0(2) + ":" + s.lead0(2);
  }
}
          
Number.prototype.lead0 = function(n) {
  var nz = "" + this;
  while (nz.length < n) {
      nz = "0" + nz;
  }
  return nz;
};

eventsInit();