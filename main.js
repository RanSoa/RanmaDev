let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
};

//   // Initialize EmailJS with your public key
//   emailjs.init("Zpyq81lfhMHVwEoZt");

//   // Add submit event listener to the form
//   document.getElementById("contact-form").addEventListener("submit", function(e) {
//     e.preventDefault();

//     emailjs.sendForm("service_dycbn1f", "template_p46t53g", this)
//       .then(() => {
//         alert("✅ Message sent successfully!");
//         this.reset();
//       }, (error) => {
//         alert("❌ Failed to send message.\n" + JSON.stringify(error));
//       });
//   });

  emailjs.init("Zpyq81lfhMHVwEoZt"); // Your public key

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_dycbn1f", "template_p46t53g", this)
        .then(() => {
          alert("✅ Message sent successfully!");
          form.reset();
        }, (error) => {
          alert("❌ Failed to send message.\n" + JSON.stringify(error));
        });
    });
  });

document.getElementById('contactBtn').onclick = function () {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}





