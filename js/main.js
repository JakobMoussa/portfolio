
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
  renderAll();
});

function renderAll() {
  const scrollY = window.scrollY;
  const wasMenuOpen = document.body.classList.contains("menu-open");

  renderHero();
  renderAbout();
  renderSkills();
  renderPortfolio();
  renderContact();
  renderFooter();
  initMobileMenu();
  initContactForm();
  updateTestimonial(currentTestimonialIndex);

  if (wasMenuOpen) {
    const rightNav = document.querySelector(".right-nav");
    if (rightNav) rightNav.style.animation = "none";
  }

  window.scrollTo(0, scrollY);
}

document.addEventListener('languageChanged', () => {
  renderAll();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const privacyInput = document.getElementById('privacy');
    const successMsg = document.getElementById('success-message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateField(inputElement, errorId, iconId, validatorFn) {
      if (!inputElement) return false;
      const val = inputElement.value.trim();
      const isValid = validatorFn(val);

      const errorEl = document.getElementById(errorId);
      const iconEl = document.getElementById(iconId);

      if (isValid) {
        inputElement.classList.remove('error');
        inputElement.classList.add('success');
        if (errorEl) errorEl.style.display = 'none';
        if (iconEl) {
          iconEl.src = 'assets/images/green-frame.svg';
          iconEl.style.display = 'block';
        }
      } else {
        inputElement.classList.remove('success');
        inputElement.classList.add('error');
        if (errorEl) errorEl.style.display = 'block';
        if (iconEl) {
          iconEl.src = 'assets/images/red-frame.svg';
          iconEl.style.display = 'block';
        }
      }
      return isValid;
    }

    function checkAllFields() {
      const isNameValid = nameInput && nameInput.value.trim().length > 0;
      const isEmailValid = emailInput && emailRegex.test(emailInput.value.trim());
      const isMessageValid = messageInput && messageInput.value.trim().length > 0;
      const isPrivacyValid = privacyInput && privacyInput.checked;

      const submitBtn = document.getElementById('submit-btn');
      if (submitBtn) {
        if (isNameValid && isEmailValid && isMessageValid && isPrivacyValid) {
          submitBtn.classList.add('valid');
        } else {
          submitBtn.classList.remove('valid');
        }
      }
    }

    if (nameInput) {
      nameInput.addEventListener('input', () => {
        validateField(nameInput, 'error-name', 'icon-name', val => val.length > 0);
        checkAllFields();
      });
    }
    if (emailInput) {
      emailInput.addEventListener('input', () => {
        validateField(emailInput, 'error-email', 'icon-email', val => emailRegex.test(val));
        checkAllFields();
      });
    }
    if (messageInput) {
      messageInput.addEventListener('input', () => {
        validateField(messageInput, 'error-message', 'icon-message', val => val.length > 0);
        checkAllFields();
      });
    }
    if (privacyInput) {
      privacyInput.addEventListener('change', () => {
        const errorEl = document.getElementById('error-privacy');
        const checkboxImg = document.getElementById('privacy-checkbox-img');
        if (privacyInput.checked) {
          if (errorEl) errorEl.style.display = 'none';
          if (checkboxImg) checkboxImg.src = 'assets/images/check-button-checked.svg';
        } else {
          if (errorEl) errorEl.style.display = 'block';
          if (checkboxImg) checkboxImg.src = 'assets/images/check-button.svg';
        }
        checkAllFields();
      });
    }

    // Initial check
    checkAllFields();

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (successMsg) successMsg.style.display = 'none';

      let isValid = true;

      if (!validateField(nameInput, 'error-name', 'icon-name', val => val.length > 0)) isValid = false;
      if (!validateField(emailInput, 'error-email', 'icon-email', val => emailRegex.test(val))) isValid = false;
      if (!validateField(messageInput, 'error-message', 'icon-message', val => val.length > 0)) isValid = false;

      const privacy = privacyInput ? privacyInput.checked : false;
      if (!privacy) {
        const errorEl = document.getElementById('error-privacy');
        if (errorEl) errorEl.style.display = 'block';
        isValid = false;
      }

      if (!isValid) return;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      try {
        const response = await fetch('contact_form_mail.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
          if (successMsg) {
            successMsg.textContent = currentLanguage === 'DE' ? 'Nachricht erfolgreich gesendet!' : 'Message sent successfully!';
            successMsg.style.color = '#22c55e';
            successMsg.style.display = 'block';
          }
          form.reset();
          [nameInput, emailInput, messageInput].forEach(el => {
            el.classList.remove('success', 'error');
          });
          document.querySelectorAll('.validation-icon').forEach(icon => icon.style.display = 'none');
          const checkboxImg = document.getElementById('privacy-checkbox-img');
          if (checkboxImg) checkboxImg.src = 'assets/images/check-button.svg';
          checkAllFields();
        } else {
          if (successMsg) {
            successMsg.textContent = currentLanguage === 'DE' ? 'Fehler beim Senden der Nachricht.' : 'Error sending message.';
            successMsg.style.color = '#cb0101';
            successMsg.style.display = 'block';
          }
        }
      } catch (error) {
        console.error('Error:', error);
        if (successMsg) {
          successMsg.textContent = currentLanguage === 'DE' ? 'Ein Fehler ist aufgetreten.' : 'An error occurred.';
          successMsg.style.color = '#cb0101';
          successMsg.style.display = 'block';
        }
      }
    });
  }
}

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