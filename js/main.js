const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let currentTestimonialIndex = 0;

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

document.addEventListener("DOMContentLoaded", renderAll);

function renderAll() {
  const scrollY = window.scrollY;
  const wasMenuOpen = document.body.classList.contains("menu-open");

  renderSections();
  initInteractions();
  restoreMenuState(wasMenuOpen);
  window.scrollTo(0, scrollY);
}

function renderSections() {
  renderHero();
  renderAbout();
  renderSkills();
  renderPortfolio();
  renderContact();
  renderFooter();
}

function initInteractions() {
  initMobileMenu();
  initContactForm();
  updateTestimonial(currentTestimonialIndex);
  initScrollObserver();
}

function initScrollObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });

  document.querySelectorAll('.about-topbar, .portfolio-project').forEach(el => observer.observe(el));
}

function restoreMenuState(wasMenuOpen) {
  if (wasMenuOpen) {
    const rightNav = document.querySelector(".right-nav");
    if (rightNav) rightNav.style.animation = "none";
  }
}

document.addEventListener('languageChanged', renderAll);

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  bindContactInputEvents();
  checkAllFields();

  form.addEventListener('submit', handleContactSubmit);
}

function validateField(inputElement, errorId, iconId, validatorFn) {
  if (!inputElement) return false;
  const isValid = validatorFn(inputElement.value.trim());
  const errorEl = document.getElementById(errorId);
  const iconEl = document.getElementById(iconId);

  updateValidationUI(inputElement, errorEl, iconEl, isValid);
  return isValid;
}

function updateValidationUI(input, errorEl, iconEl, isValid) {
  input.classList.remove(isValid ? 'error' : 'success');
  input.classList.add(isValid ? 'success' : 'error');

  if (errorEl) errorEl.style.display = isValid ? 'none' : 'block';
  if (iconEl) {
    iconEl.src = isValid ? 'assets/images/green-frame.svg' : 'assets/images/red-frame.svg';
    iconEl.style.display = 'block';
  }
}

function checkAllFields() {
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const privacyInput = document.getElementById('privacy');

  const isNameValid = nameInput && nameInput.value.trim().length > 0;
  const isEmailValid = emailInput && EMAIL_REGEX.test(emailInput.value.trim());
  const isMessageValid = messageInput && messageInput.value.trim().length > 0;
  const isPrivacyValid = privacyInput && privacyInput.checked;

  updateSubmitButton(isNameValid && isEmailValid && isMessageValid && isPrivacyValid);
}

function updateSubmitButton(isValid) {
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) {
    if (isValid) {
      submitBtn.classList.add('valid');
    } else {
      submitBtn.classList.remove('valid');
    }
  }
}

function bindContactInputEvents() {
  bindInput('contact-name', 'error-name', 'icon-name', val => val.length > 0);
  bindInput('contact-email', 'error-email', 'icon-email', val => EMAIL_REGEX.test(val));
  bindInput('contact-message', 'error-message', 'icon-message', val => val.length > 0);

  const privacyInput = document.getElementById('privacy');
  if (privacyInput) privacyInput.addEventListener('change', () => handlePrivacyChange(privacyInput));
}

function bindInput(inputId, errorId, iconId, validatorFn) {
  const input = document.getElementById(inputId);
  if (input) {
    input.addEventListener('input', () => {
      validateField(input, errorId, iconId, validatorFn);
      checkAllFields();
    });
  }
}

function handlePrivacyChange(privacyInput) {
  const errorEl = document.getElementById('error-privacy');
  const checkboxImg = document.getElementById('privacy-checkbox-img');

  if (errorEl) errorEl.style.display = privacyInput.checked ? 'none' : 'block';
  if (checkboxImg) {
    checkboxImg.src = privacyInput.checked ? 'assets/images/check-button-checked.svg' : 'assets/images/check-button.svg';
  }
  checkAllFields();
}

async function handleContactSubmit(e) {
  e.preventDefault();
  const successMsg = document.getElementById('success-message');
  if (successMsg) successMsg.style.display = 'none';

  if (!validateAllBeforeSubmit()) return;

  await sendContactMessage();
}

function validateAllBeforeSubmit() {
  const nameValid = validateField(document.getElementById('contact-name'), 'error-name', 'icon-name', val => val.length > 0);
  const emailValid = validateField(document.getElementById('contact-email'), 'error-email', 'icon-email', val => EMAIL_REGEX.test(val));
  const msgValid = validateField(document.getElementById('contact-message'), 'error-message', 'icon-message', val => val.length > 0);
  const privacyValid = checkPrivacyBeforeSubmit();

  return nameValid && emailValid && msgValid && privacyValid;
}

function checkPrivacyBeforeSubmit() {
  const privacyInput = document.getElementById('privacy');
  if (!privacyInput || !privacyInput.checked) {
    const errorEl = document.getElementById('error-privacy');
    if (errorEl) errorEl.style.display = 'block';
    return false;
  }
  return true;
}

async function sendContactMessage() {
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  const successMsg = document.getElementById('success-message');

  try {
    const response = await fetch('contact_form_mail.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
    handleResponse(response.ok, successMsg);
  } catch (error) {
    console.error('Error:', error);
    showContactError(successMsg, 'Ein Fehler ist aufgetreten.', 'An error occurred.');
  }
}

function handleResponse(isOk, successMsg) {
  if (isOk) {
    handleContactSuccess(successMsg);
  } else {
    showContactError(successMsg, 'Fehler beim Senden der Nachricht.', 'Error sending message.');
  }
}

function handleContactSuccess(successMsg) {
  if (successMsg) {
    successMsg.textContent = currentLanguage === 'DE' ? 'Nachricht erfolgreich gesendet!' : 'Message sent successfully!';
    successMsg.style.color = '#22c55e';
    successMsg.style.display = 'block';
  }
  resetContactForm();
}

function resetContactForm() {
  const form = document.getElementById('contact-form');
  if (form) form.reset();

  ['contact-name', 'contact-email', 'contact-message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('success', 'error');
  });

  document.querySelectorAll('.validation-icon').forEach(icon => icon.style.display = 'none');
  const checkboxImg = document.getElementById('privacy-checkbox-img');
  if (checkboxImg) checkboxImg.src = 'assets/images/check-button.svg';
  checkAllFields();
}

function showContactError(successMsg, deText, enText) {
  if (successMsg) {
    successMsg.textContent = currentLanguage === 'DE' ? deText : enText;
    successMsg.style.color = '#cb0101';
    successMsg.style.display = 'block';
  }
}

function updateTestimonial(index) {
  currentTestimonialIndex = index;
  const testimonial = testimonials[currentLanguage][index];

  updateTestimonialContent(testimonial);
  updateTestimonialDots(index);
}

function updateTestimonialContent(testimonial) {
  const testimonialText = document.querySelector(".testimonial-text");
  const testimonialAuthor = document.querySelector(".testimonial-author");
  const testimonialImage = document.querySelector(".testimonial-person");

  if (testimonialText) testimonialText.textContent = testimonial.text;
  if (testimonialAuthor) testimonialAuthor.textContent = testimonial.author;
  if (testimonialImage) testimonialImage.src = testimonial.image;
}

function updateTestimonialDots(index) {
  const dots = document.querySelectorAll(".nav-dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function initTestimonialNavigation() {
  initTestimonialArrows();
  initTestimonialDotClicks();
}

function initTestimonialArrows() {
  const prevBtn = document.querySelector(".testimonial-nav .nav-arrow:first-of-type");
  const nextBtn = document.querySelector(".testimonial-nav .nav-arrow:last-of-type");

  if (prevBtn) prevBtn.addEventListener("click", () => changeTestimonial(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => changeTestimonial(1));
}

function changeTestimonial(direction) {
  const currentTestimonials = testimonials[currentLanguage];
  const length = currentTestimonials.length;
  const newIndex = (currentTestimonialIndex + direction + length) % length;
  updateTestimonial(newIndex);
}

function initTestimonialDotClicks() {
  const dots = document.querySelectorAll(".nav-dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateTestimonial(index);
    });
  });
}

