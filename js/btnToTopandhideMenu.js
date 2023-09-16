const topHeader = document.getElementById("top-headers");
const logoTopHeader = document.getElementById("logo-header");

window.addEventListener('scroll', function (event) {
  // Get the current scroll position
  const scrollY = window.scrollY;
  const width = window.innerWidth;
  // Your scroll event handling logic here
  if(width > 800){
    if(scrollY < 100){
      topHeader.classList.remove('hide-top-header')
      logoTopHeader.classList.remove('logo-headers')
    }else{
      topHeader.classList.add("hide-top-header")
      logoTopHeader.classList.add("logo-headers")
    }
  }
});