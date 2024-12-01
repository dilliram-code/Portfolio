var typed = new Typed(".typing", {
  strings: ["","web designer", "data analyst", "fitness freak", "science geek"],
  typeSpeed: 50,
  BackSpeed: 60,
  loop:true
})

//////////////////////////////////////////////////////////////
// Add links to the portfolio images for the external website.
// Link to the first image
let firstLink = document.querySelector('.portfolio-image1');
firstLink.addEventListener('click', () => {
  window.location.href = 'https://enjoyaroom.netlify.app/';
});

//Link to the second image
let secondLink = document.querySelector('.portfolio-image2');
secondLink.addEventListener('click', ()=>{
  window.location.href='https://lowbudgetgroup.netlify.app/';
});

//Link to the third image
let thirdLink = document.querySelector('.portfolio-image3');
thirdLink.addEventListener('click', ()=> {
  window.location.href = 'https://dilliram.vercel.app/';
})
