
function renderHero() {
  document.getElementById("hero-section").innerHTML = HeroTemplate();
}

function renderAbout() {
  document.getElementById("about-section").innerHTML = renderAboutTemplate();
}

function renderSkills() {
  document.getElementById("skills-section").innerHTML = renderSkillsTemplate();
}

function renderPortfolio() {
  document.getElementById("portfolio-section").innerHTML = renderPortfolioTemplate();
  initTestimonialNavigation();
}

function renderContact() {
  document.getElementById("contact-section").innerHTML = renderContactTemplate();
}

function renderFooter() {
  document.getElementById("footer-section").innerHTML = renderFooterTemplate();
}

function initMobileMenu() {
  const rightNav = document.querySelector(".right-nav");
  if (rightNav) {
    rightNav.addEventListener("click", (e) => {
      if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
        if (document.body.classList.contains("menu-open")) {
          closeMenu();
        } else {
          document.body.classList.add("menu-open");
        }
      }
    });

    const navLinks = rightNav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
  }
}

function closeMenu() {
  document.body.classList.add("menu-closing");
  setTimeout(() => {
    document.body.classList.remove("menu-open");
    document.body.classList.remove("menu-closing");
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();
});

function renderAll() {
  renderHero();
  renderAbout();
  renderSkills();
  renderPortfolio();
  renderContact();
  renderFooter();
  initMobileMenu();
  initLanguageSwitch();
  initContactForm();
  updateTestimonial(currentTestimonialIndex);
}

function initLanguageSwitch() {
  const switchBtns = document.querySelectorAll('.language-switch button');
  switchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.textContent.trim();
      if (lang === currentLanguage) return;
      currentLanguage = lang;

      renderAll();
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;

      try {
        const response = await fetch('contact_form_mail.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
          alert(currentLanguage === 'DE' ? 'Nachricht erfolgreich gesendet!' : 'Message sent successfully!');
          form.reset();
        } else {
          alert(currentLanguage === 'DE' ? 'Fehler beim Senden der Nachricht.' : 'Error sending message.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert(currentLanguage === 'DE' ? 'Ein Fehler ist aufgetreten.' : 'An error occurred.');
      }
    });
  }
}

const testimonials = {
  EN: [
    {
      text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      author: "V. Schuster - Team Partner",
      image: "assets/images/profile.png"
    },
    {
      text: "Jakob's attention to detail and problem-solving skills are outstanding. He delivers high-quality code and is a pleasure to work with.",
      author: "M. Bauer - Project Lead",
      image: "assets/images/profile.png"
    },
    {
      text: "His expertise in frontend development helped us achieve our goals faster. Great communication and a true team player.",
      author: "S. Klein - Colleague",
      image: "assets/images/profile.png"
    }
  ],
  DE: [
    {
      text: "Michael hat das Team mit seiner großartigen Organisation und klaren Kommunikation wirklich zusammengehalten. Ohne sein Engagement wären wir nicht so weit gekommen.",
      author: "V. Schuster - Teamkollege",
      image: "assets/images/profile.png"
    },
    {
      text: "Jakobs Liebe zum Detail und seine Problemlösungsfähigkeiten sind herausragend. Er liefert qualitativ hochwertigen Code und es ist eine Freude, mit ihm zu arbeiten.",
      author: "M. Bauer - Projektleiter",
      image: "assets/images/profile.png"
    },
    {
      text: "Seine Expertise in der Frontend-Entwicklung hat uns geholfen, unsere Ziele schneller zu erreichen. Großartige Kommunikation und ein echter Teamplayer.",
      author: "S. Klein - Kollege",
      image: "assets/images/profile.png"
    }
  ]
};

let currentTestimonialIndex = 0;

function updateTestimonial(index) {
  currentTestimonialIndex = index;
  const currentTestimonials = testimonials[currentLanguage];
  const testimonial = currentTestimonials[index];

  const testimonialText = document.querySelector(".testimonial-text");
  const testimonialAuthor = document.querySelector(".testimonial-author");
  const testimonialImage = document.querySelector(".testimonial-person");

  if (testimonialText) testimonialText.textContent = testimonial.text;
  if (testimonialAuthor) testimonialAuthor.textContent = testimonial.author;
  if (testimonialImage) testimonialImage.src = testimonial.image;

  const dots = document.querySelectorAll(".nav-dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function initTestimonialNavigation() {
  const prevBtn = document.querySelector(".testimonial-nav .nav-arrow:first-of-type");
  const nextBtn = document.querySelector(".testimonial-nav .nav-arrow:last-of-type");
  const dots = document.querySelectorAll(".nav-dot");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const currentTestimonials = testimonials[currentLanguage];
      const newIndex = (currentTestimonialIndex - 1 + currentTestimonials.length) % currentTestimonials.length;
      updateTestimonial(newIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const currentTestimonials = testimonials[currentLanguage];
      const newIndex = (currentTestimonialIndex + 1) % currentTestimonials.length;
      updateTestimonial(newIndex);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateTestimonial(index);
    });
  });
}