
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

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderPortfolio();
  renderContact();
  renderFooter();
});

const testimonials = [
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
];

let currentTestimonialIndex = 0;

function updateTestimonial(index) {
  currentTestimonialIndex = index;
  const testimonial = testimonials[index];
 
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
      const newIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(newIndex);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const newIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(newIndex);
    });
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateTestimonial(index);
    });
  });
}