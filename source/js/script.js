var button = document.querySelector(".header-button");
var navigation = document.querySelector(".navigation");

function closeNavigation() {
  if(window.innerWidth < 768){
    navigation.classList.add("navigation-close");
    button.classList.add("header-button-close");
  }
}

closeNavigation();

window.addEventListener('resize', function(){
  if(window.innerWidth < 768){
    navigation.classList.add("navigation-close");
    button.classList.add("header-button-close");
  }
  else {
    navigation.classList.remove("navigation-close");
    button.classList.remove("header-button-close");
  }
});

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  navigation.classList.toggle("navigation-close");
  button.classList.toggle("header-button-close");
});
