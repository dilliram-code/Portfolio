function sendMail() {
    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject"),
      message: document.getElementById("message").value,
    };


    // const public_key = 'hFrNm3XDp2pxj6OtW';
    const serviceID = 'service_f7fz87m';
    const templateID = 'template_965xjpo';

    

      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your response sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }


