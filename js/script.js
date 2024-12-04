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


// Email Js starts
const public_key = 'hFrNm3XDp2pxj6OtW';
const serviceId = 'service_f7fz87m';
const templateId = 'template_965xjpo';
// Initialize EmailJS with your user ID
// (function(){emailjs.init(public_key);})(); 
//   document.addEventListener('DOMContentLoaded', ()=> {
//     document.querySelector('.btn').addEventListener('click', function (e) {
//       e.preventDefault();

//       const name = document.querySelector('#Name').value;
//       const email = document.querySelector('#Email').value;
//       const subject = document.querySelector('#Subject').value;
//       const message = document.querySelector('#Message]').value;

//       emailjs.send(serviceId, templateId, {
//         name: name,
//         email: email,
//         subject: subject,
//         message: message
//       }).then(function(response) {
//         console.log('Success!', response.status, response.text);
//         alert('Message sent successfully!');
//       }, function(error) {
//         console.log('Failed...', error);
//         alert('Failed to send message. Please try again later.');
//       });
//     });
//   });


// Eamil Js ends