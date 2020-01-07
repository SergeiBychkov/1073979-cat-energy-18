var button = document.querySelector(".header-button");
var navigation = document.querySelector(".navigation");
var breakpoint = 768;

var closeNavigation = function () {
  if(window.innerWidth < breakpoint){
    navigation.classList.add("navigation-close");
    button.classList.remove("header-button-hide");
    button.classList.add("header-button-close");
  }
};

closeNavigation();

window.addEventListener('resize', function () {
  if(window.innerWidth < breakpoint){
    navigation.classList.add("navigation-close");
    button.classList.remove("header-button-hide");
    button.classList.add("header-button-close");
  }
  else {
    navigation.classList.remove("navigation-close");
    button.classList.add("header-button-hide");
    button.classList.remove("header-button-close");
  }
});

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  navigation.classList.toggle("navigation-close");
  button.classList.toggle("header-button-close");
});
