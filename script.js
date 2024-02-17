
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

   function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  menuItems.classList.toggle("active");
}



      

