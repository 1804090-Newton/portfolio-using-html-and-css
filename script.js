
    function toggleAbout() {
        var aboutSection = document.getElementById("about");
    
        if (aboutSection.style.display === "none") {
            aboutSection.style.display = "block";
          } else {
            aboutSection.style.display = "none";
          }
    }



    
let navbar = document.querySelector(".navbar");

let dropdownMenu = document.querySelector(".navbar .menu-items");
function toggleMenu() {
  dropdownMenu.classList.toggle("active");
}
navbar.addEventListener("mouseleave", function() {
  dropdownMenu.classList.remove("active");
});


let contactFormVisible = false;

function createContactForm() {

  let  contactFormDiv = document.getElementById('contactForm');
  if (document.getElementById('contactForm')) {
    contactFormDiv.remove();
    contactFormVisible = false;  
    return;
  }

   contactFormDiv = document.createElement("div");
  contactFormDiv.id = "contactForm";

  let heading = document.createElement("h2");
  heading.textContent = "Contact Me";

  let form = document.createElement("form");
  form.id = "contactForm";

  let firstNameLabel = document.createElement("label");
  firstNameLabel.setAttribute("for", "firstName");
  firstNameLabel.textContent = "First Name:";
  let firstNameInput = document.createElement("input");
  firstNameInput.type = "text";
  firstNameInput.id = "firstName";
  firstNameInput.name = "firstName";

  let lastNameLabel = document.createElement("label");
  lastNameLabel.setAttribute("for", "lastName");
  lastNameLabel.textContent = "Last Name:";
  let lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.id = "lastName";
  lastNameInput.name = "lastName";

  let contactNumberLabel = document.createElement("label");
  contactNumberLabel.setAttribute("for", "contactNumber");
  contactNumberLabel.textContent = "Contact Number:";
  let contactNumberInput = document.createElement("input");
  contactNumberInput.type = "tel";
  contactNumberInput.id = "contactNumber";
  contactNumberInput.name = "contactNumber";

  let emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";
  let emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";

  let messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message");
  messageLabel.textContent = "Message:";
  let messageTextarea = document.createElement("textarea");
  messageTextarea.id = "message";
  messageTextarea.name = "message";
  messageTextarea.rows = "4";
  messageTextarea.cols = "50";

  let submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  form.appendChild(firstNameLabel);
  form.appendChild(firstNameInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(lastNameLabel);
  form.appendChild(lastNameInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(contactNumberLabel);
  form.appendChild(contactNumberInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(messageLabel);
  form.appendChild(messageTextarea);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitButton);

  contactFormDiv.appendChild(heading);
  contactFormDiv.appendChild(form);

  document.body.appendChild(contactFormDiv);

  contactFormDiv.scrollIntoView({ behavior: "smooth" });
  contactFormVisible = true;
}




