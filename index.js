function scrollToTop(){
    window.scrollTo(0,0);
}


var clicked = false;

function myfunction() {
  clicked = !clicked;
  const el = document.getElementById("btn");
  if (clicked) {
    el.style.color = "red"
  } else {
    el.style.color = "black"
  }

}