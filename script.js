
        document.addEventListener('DOMContentLoaded', function () {
            const contactButton = document.querySelector('a[href="#contact"]');
            const contactForm = document.getElementById('contactForm');
    
            contactButton.addEventListener('click', function (event) {
                event.preventDefault(); 
                contactForm.style.display = 'block';
               
                contactForm.scrollIntoView({ behavior: 'smooth' });
            });
        });
  