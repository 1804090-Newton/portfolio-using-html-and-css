
    document.addEventListener('DOMContentLoaded', function () {
        const contactButton = document.querySelector('a[href="#contact"]');
        const contactForm = document.getElementById('contactForm');
        let isContactFormVisible = false;

        contactButton.addEventListener('click', function (event) {
            event.preventDefault(); 
            if (!isContactFormVisible) {
                contactForm.style.display = 'block';
                contactForm.scrollIntoView({ behavior: 'smooth' });
            } else {
                contactForm.style.display = 'none';
            }
            isContactFormVisible = !isContactFormVisible;
        });
    });


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

