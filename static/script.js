// Countdown Timer
const countdown = document.getElementById('countdown');

function updateCountdown() {
    const eventDate = new Date('2023-12-31T00:00:00'); // Event date 
    const now = new Date();
    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;

    if (diff < 0) {
        clearInterval(interval);
        countdown.innerHTML = "";
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// Responsive Menu Handling
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.textContent.replace('.', ''));
      let count = 0;
      const increment = Math.ceil(target / 100); // Incrément dynamique
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          stat.textContent = target.toLocaleString(); // Formater le chiffre
          clearInterval(interval);
        } else {
          stat.textContent = count.toLocaleString();
        }
      }, 30); // Intervalle en millisecondes
    });
  }


  document.addEventListener('DOMContentLoaded', animateNumbers);

// Animation au scroll Statistiques
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach((item) => {
    observer.observe(item);
});

// Effet de comptage des nombres Statistiques
const stats = document.querySelectorAll('.stat-number');
const speed = 200;

stats.forEach((stat) => {
    const updateCount = () => {
        const target = +stat.innerText;
        const count = +stat.innerText;
        const increment = target / speed;
        
        if(count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            stat.innerText = target;
        }
    };
    
    observer.observe(stat.parentElement, {
        threshold: 1,
        once: true
    }).then(() => updateCount());
});
/*  document.addEventListener('DOMContentLoaded', animateNumbers);

  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Empêche le rechargement de la page
  
      // Récupère les données du formulaire
      const formData = new FormData(form);
  
      // Envoi de la requête en AJAX avec Fetch API
      fetch(form.action, {
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest"  
        },
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Affiche le message
        let flashContainer = document.querySelector('.flashes');
        if (!flashContainer) {
          flashContainer = document.createElement('ul');
          flashContainer.classList.add('flashes');
          // Insère ce conteneur au-dessus du formulaire
          form.parentNode.insertBefore(flashContainer, form);
        }
        // Crée et affiche l'élément message
        flashContainer.innerHTML = `<li>${data.message}</li>`;
        flashContainer.style.opacity = 1;
  
        // Après 3 secondes, fais disparaître le message
        setTimeout(function() {
          flashContainer.style.transition = "opacity 1s ease-out";
          flashContainer.style.opacity = "0";
        }, 3000);
  
        // Réinitialise le formulaire (optionnel)
        if (data.status === "success") {
          form.reset();
        }
      })
      .catch(error => console.error("Error:", error));
    });
  });

  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    const offset = 80; 
    const topPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  }
  // Appel après le traitement AJAX
  setTimeout(scrollToContact, 100);
  */
  