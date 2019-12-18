//Hamburger-menu
const hamburgerMenuLink = document.querySelector('.hamburger-menu-link');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const closeButton = document.querySelector('.hamburger-menu__close');

hamburgerMenuLink.addEventListener('click', function () {
  hamburgerMenu.classList.add('hamburger-menu_visible');
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

onepagescroll('#main');

onepagescroll('#main',{

  //child elements selector. use if you don't want to use section for page.
  pageContainer: 'section',     

  //determine css3 animation that will run when page changes
  //ex) 'ease', 'ease-out-in', 'cubic-bezier(0.2, 0.75, 0.5, 1.15)'
  animationType: 'ease-in-out', 

  //define how long each page takes to animate, 0 for off
  animationTime: 500,        

  //back to the last/first page when you scroll at first/last page   
  infinite: true,           

  //set show or hide pagination element.    
  pagination: true,             

  //allow up/page-up and down/page-down key for page scroll
  keyboard: false,           

  //determine direction of page scroll. options available are 'vertical' and 'horizontal'    
  direction: 'vertical'        
   
});


/* click event for pagination */
var opsNavItem = document.querySelectorAll('li.ops-navigation__item');
opsNavItem.forEach(function(element, i) {
  i = i - 7;
  element.addEventListener ('click', function() {
    console.log(i);
    // var clickedItemIndex = event.target;
    // var clickedItemIndex = clickedItem.index;
    // var main = document.querySelector('#main');
    main.style.transform = 'translate3d(0,' + -(i-1)*100 + '%,0)';
    document.querySelector('a.active[data-targetindex]').classList.remove('active');
		document.querySelector('a[data-targetindex="' + i +'"]').classList.add('active');
  });
});