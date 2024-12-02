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

// Initialize EmailJS with your user ID
emailjs.init('hFrNm3XDp2pxj6OtW'); 
  // Wait for the page to load
  document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the submit button
    document.querySelector('.btn').addEventListener('click', function (e) {
      e.preventDefault(); 

      // Get the form data
      const name = document.querySelector('input[placeholder="Name"]').value;
      const email = document.querySelector('input[placeholder="Email"]').value;
      const subject = document.querySelector('input[placeholder="Subject"]').value;
      const message = document.querySelector('textarea[placeholder="Message"]').value;

      // Use EmailJS to send the data
      emailjs.send('service_f7fz87m', 'template_965xjpo', {
        name: name,
        email: email,
        subject: subject,
        message: message
      }).then(function(response) {
        console.log('Success!', response.status, response.text);
        alert('Message sent successfully!');
      }, function(error) {
        console.log('Failed...', error);
        alert('Failed to send message. Please try again later.');
      });
    });
  });



// Eamil Js ends