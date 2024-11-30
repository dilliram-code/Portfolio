// Loader logic starts

gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity:0,
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo (
    ".logo-name", 
    {
      y:50,
      opacity: 0,
    },
    {
      y:0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );
//Remove from DOM
// Monitor GSAP animation completion using setTimeout
setTimeout(() => {
  const loader = document.querySelector(".loading-page");
  if (loader) {
    loader.parentNode.removeChild(loader); // Remove loader from the DOM
  }
}, 5000); // 3.5s delay + 1.5s duration = 5s total

//loader logic ends

// =========toggle style switcher ===============//
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener("click", ()=>{
  document.querySelector(".style-switcher").classList.toggle("open");
});


// Hide style - switcher on scroll
window.addEventListener("scroll", ()=>{
  if(document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})

/*================ theme colors ========*/ 
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style)=>{
    if(color ===style.getAttribute("title"))
    {
      style.removeAttribute("disabled");
    }
    else 
    {
      style.setAttribute("disabled", "true");
    }
  })
}
/*============== theme light and dark mode ============*/ 
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=> {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load", ()=> {
  if(document.body.classList.contains("dark"))
  {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
  else 
  {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
})
