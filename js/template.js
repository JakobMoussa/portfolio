
function HeroTemplate() {
  const t = translations[currentLanguage];
  return `
    <section class="hero">

      <!-- Header -->
      <header class="hero-header">
        <div class="logo">
          <img src="assets/images/Jakob.svg" alt="Logo">
        </div>

          <div class="right-nav">
            <nav class="nav">
              <a href="#about-section">${t.navAbout}</a>
              <a href="#skills-section">${t.navSkills}</a>
              <a href="#portfolio-section">${t.navPortfolio}</a>
              <a href="#contact-section">${t.navContact}</a>
            </nav>

            <div class="language-switch">
              <button class="${currentLanguage === 'DE' ? 'active' : ''}">DE</button>
              <span class="separator">/</span>
              <button class="${currentLanguage === 'EN' ? 'active' : ''}">EN</button>
            </div>
          </div>
      </header>

      <!-- Hero Content -->
      <div class="hero-content">

        <div class="hero-image">
          <img class="shadow-purple" src="assets/images/Purple shadow Foto.png" alt="glow-purple">
          <img class="shadow-green" src="assets/images/Green shadow Foto.png" alt="glow-green">
          <img class="profile-img" src="assets/images/profile-img.png" alt="Profile">
        </div>

        <div class="hero-text">
         <div class="hero-title-group">
            <div class="hero-side-text">
              <span>${t.heroAm}</span>
            </div>

            <div class="hero-main-text">
              <h1>Jakob Moussa</h1>
              <h2>${t.heroRole}</h2>
            </div>
          </div>

          <button class="Hero-button" onclick="window.location.href='#contact-section'">${t.heroBtn}</button>
        </div>

        <img class="vector" src="assets/images/Vector (1).png">
      </div>

        <span class="scroll-txt">${t.heroScroll}
        <img  class="arrow-icon" src="assets/images/icons/arrow.svg"/>
        </span>
      <img class="purple-shadow-2" src="assets/images/Purple shadow 2 (1).png" />

      <!-- Top Bar -->
      <div class="about-topbar">
        <div class="topbar-line"></div>

        <div class="social-links">
          <a href="https://github.com/JakobMoussa" target="_blank" rel="noopener noreferrer"><img src="assets/images/icons/github.svg" alt="GitHub"></a>
          <a href="mailto:contact@jakobmoussa.de"><img src="assets/images/icons/Email button.svg" alt="Mail"></a>
          <a href="https://www.linkedin.com/in/jakob-moussa" target="_blank" rel="noopener noreferrer"><img src="assets/images/icons/Linkedin button.svg" alt="LinkedIn"></a>
        </div>

        <div class="email">
          <a href="mailto:contact@jakobmoussa.de">contact@jakobmoussa.de</a>
        </div>
      </div>

    </section>
  `;
}

function renderAboutTemplate() {
  const t = translations[currentLanguage];
  return `
    <section class="about-me">

      <!-- Content -->
      <div class="about-content">

        <!-- Left -->
        <div class="about-text">
          <h2>${t.aboutMeTitle}</h2>

          <p class="txt">
          ${t.aboutMeText}
          </p>

          <div class="about-items">

            <div class="about-item">
              <div class="about-icon">
                <img src="assets/images/icons/11.Location.svg" alt="">
              </div>
              <p class="info-txt">
               ${t.aboutLocText}
              </p>
            </div>

            <div class="about-item">
              <div class="about-icon">
                <img src="assets/images/icons/12. bulb desktop.svg" alt="">
              </div>
              <p class="info-txt-2">
                  ${t.aboutLearnText}
              </p>
            </div>

            <div class="about-item">
              <div class="about-icon">
                <img src="assets/images/icons/13. puzzle desktop.svg" alt="">
              </div>
              <p class="info-txt">
                ${t.aboutSolveText}
              </p>
            </div>

          </div>
        </div>

        <!-- Right -->
        <div class="about-image">
          <div class="image-circle">
            <img class="profile-2" src="assets/images/profile-2.png" alt="Jakob">
          </div>
          <div class="circle-line"></div>
        </div>

      </div>

    </section>
  `;
}

function renderSkillsTemplate() {
  const t = translations[currentLanguage];
  return `

  <section class="skills-section">
      
      <div class="left-container">
        <div class="skills-box">
            <div class="skill-item">
              <img class="icon" src="assets/images/icons/html.svg">
              <span>HTML</span>
            </div>
            <div class="skill-item">
              <img class="icon" src="assets/images/icons/css.svg">
              <span>CSS</span>
            </div>
            <div class="skill-item">
              <img class="icon" src="assets/images/icons/js.svg">
              <span>JavaScript</span>
            </div>
            <div class="skill-item">
              <img class="icon" src="assets/images/icons/typescript.svg">
              <span>TypeScript</span>
            </div>
            <div class="skill-item">
              <img class="icon" src="assets/images/icons/Angular.svg">
              <span>Angular</span>
            </div>
            <div class="skill-item">
              <img class="icon" src="assets/images/icons/subabase.svg">
              <span>Supabase</span>
            </div>
            <div class="skill-item">
              <img class="icon" src="assets/images/icons/git.svg">
              <span>Git</span>
            </div>
            <div class="skill-item">
              <img class="icon" src="assets/images/icons/api.svg">
              <span>API</span>
            </div>
            <div class="skill-item">
              <img class="icon" src="assets/images/icons/scrum.svg">
              <span>Scrum</span>
            </div>
            <div class="skill-item">
              <img class="icon" src="assets/images/icons/material-design.svg">
              <span>Material Design</span>
            </div>
            <div class="special-icon">
            <div class="learning-card">
              <div class="learning">
              <img class="main-icon" src="assets/images/icons/learning.svg">
              <span class="txt-learning">Continually learning</span>
            </div>
              <div class="skill-bubble">
                <p class="bubble-txt">${t.skillsSpecial}</p>

                <div class="bubble-icons">
                <div class="learning-icons">
                  <img src="assets/images/icons/React.svg" alt="React">
                  <span>React</span>
                </div>
                <div class="learning-icons">
                  <img src="assets/images/icons/Vue.svg" alt="Vue">
                  <span>Vue</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="right-container">
        <div class="skills-txt">
          <div class="skills-title-wrap">
            <h1>${t.skillsTitle}</h1>
            <div class="skills-h1-line"></div>
          </div>

          <p class="txt-1">${t.skillsTxt1}</p>
          
          <p class="txt-2">
            ${t.skillsTxt2_1}<span>${t.skillsTxt2_2}</span>
          </p>

          <p class="txt-3">${t.skillsTxt3}</p>

          <button class="btn" onclick="window.location.href='#contact-section'">${t.skillsBtn}</button>
          </div>
  </section>
  <img class="green-shadow-2" src="assets/images/Green shadow 2 (1).png">
  `
}

function renderPortfolioTemplate() {
  const t = translations[currentLanguage];
  return `
        <section class="portfolio-section">
          <div class="portfolio-headline">
            <span class="headline-line headline-line-left"></span>
            <h1>${t.portfolioTitle}</h1>
            <span class="headline-line headline-line-right"></span>
          </div>
          <p class="txt-portfolio">${t.portfolioDesc}</p>

          <div class="portfolio-projects">
            <article class="portfolio-project">
              <div class="project-media">
                <img class="join-image" src="assets/images/join.png" alt="Join project preview">
              </div>
              <div class="project-content">
                <h2>Join</h2>
                <h3>Angular | TypeScript | HTML | CSS | Firebase</h3>
                <p class="p-txt">${t.joinDesc}</p>
                <div class="project-actions">
                  <a href="https://jakob-moussa.developerakademie.net/6-join/index.html" target="_blank" rel="noopener noreferrer" class="live-btn project-btn">${t.liveTest}</a>
                  <a href="https://github.com/JakobMoussa/Join-Project.git" target="_blank" rel="noopener noreferrer" class="github-btn project-btn">Github</a>
                </div>
              </div>
            </article>

            <article class="portfolio-project reverse">
              <div class="project-content">
                <h2>Sharkie</h2>
                <h3>JavaScript | HTML | CSS</h3>
                <p class="p-txt">${t.sharkieDesc}</p>
                <div class="project-actions">
                  <a href="https://jakob-moussa.developerakademie.net/Sharkie/index.html" target="_blank" rel="noopener noreferrer" class="live-btn project-btn">${t.liveTest}</a>
                  <a href="https://github.com/JakobMoussa/sharkie" target="_blank" rel="noopener noreferrer" class="github-btn project-btn">Github</a>
                </div>
              </div>
              <div class="project-media">
                <img class="sharkie-image" src="assets/images/sharkie.png">
              </div>
            </article>
            
            <article class="portfolio-project">
              <div class="project-content">
                <h2>Pokedex</h2>
                <h3>JavaScript | HTML | CSS | Api</h3>
                <p class="p-txt">${t.pokeDesc}</p>
                <div class="project-actions">
                  <a href="https://jakob-moussa.developerakademie.net/Pokomon/index.html" target="_blank" rel="noopener noreferrer" class="live-btn project-btn">${t.liveTest}</a>
                  <a href="https://github.com/JakobMoussa/pokedex" target="_blank" rel="noopener noreferrer" class="github-btn project-btn">Github</a>
                </div>
              </div>
              <div class="project-media">
                <img src="assets/images/pokedex-photo.png">
              </div>
            </article>

          </div>

          <section class="portfolio-reference">
            <div class="testimonial-card-wrap">
              <img class="testimonial-quote" src="assets/images/Comma.svg" alt="">

              <div class="testimonial-card">
                <p class="testimonial-text">
                  <!-- Text gets updated dynamically -->
                </p>
                <div class="testimonial-footer">
                  <span class="testimonial-line"></span>
                  <span class="testimonial-author"><!-- Author gets updated dynamically --></span>
                </div>
              </div>
            </div>

            <div class="testimonial-person-wrap">
              <img class="testimonial-person" src="assets/images/profile.png" alt="Team partner portrait">
              <span class="testimonial-person-line"></span>
            </div>
          </section>

          <div class="testimonial-nav" aria-label="testimonial navigation">
            <button class="nav-arrow" type="button" aria-label="previous testimonial">&larr;</button>
            <span class="nav-dot active"></span>
            <span class="nav-dot"></span>
            <span class="nav-dot"></span>
            <button class="nav-arrow" type="button" aria-label="next testimonial">&rarr;</button>
          </div>
        </section>
        <img class="testimonial-green-shadow" src="assets/images/Green shadow 2 (2).png" alt="">
  `
}

function renderContactTemplate() {
  const t = translations[currentLanguage];
  return `
<section class="contact-section">

  <!-- Headline -->
  <div class="contact-headline-container">
    <span class="line"></span>
    <h2 class="contact-headline">${t.contactTitle}</h2>
  </div>

  <!-- Content Bereich -->
  <div class="contact-container">

    <!-- Links -->
    <div class="contact-left">
      <h3>${t.contactProb}</h3>

      <p>
        ${t.contactDesc1}
      </p>

      <p>
        ${t.contactDesc2_1}<strong>${t.contactDesc2_2}</strong>
      </p>
    </div>

    <!-- Rechts -->
    <div class="contact-right">
        <form id="contact-form" novalidate>

          <div class="input-wrapper">
            <input type="text" id="contact-name" placeholder="${t.placeholderName}">
            <img class="validation-icon" id="icon-name" src="" alt="validation icon">
          </div>
          <span class="error-msg" id="error-name" style="display:none; color:#cb0101; font-size:12px; margin-top:-15px;">${t.errorName}</span>
          
          <div class="input-wrapper">
            <input type="text" id="contact-email" placeholder="${t.placeholderEmail}">
            <img class="validation-icon" id="icon-email" src="" alt="validation icon">
          </div>
          <span class="error-msg" id="error-email" style="display:none; color:#cb0101; font-size:12px; margin-top:-15px;">${t.errorEmail}</span>

          <div class="input-wrapper textarea-wrapper">
            <textarea id="contact-message" placeholder="${t.placeholderMsg}" rows="5"></textarea>
            <img class="validation-icon" id="icon-message" src="" alt="validation icon">
          </div>
          <span class="error-msg" id="error-message" style="display:none; color:#cb0101; font-size:12px; margin-top:-15px;">${t.errorMessage}</span>

          <div class="checkbox">
            <input type="checkbox" id="privacy" style="display:none;">
            <label for="privacy" style="display:flex; align-items:center; gap:10px; cursor:pointer;">
              <img src="assets/images/check-button.svg" class="custom-checkbox" id="privacy-checkbox-img" alt="checkbox" style="width:24px; height:24px;">
              <span>${t.privacyText}<a href="datenschutz.html">${t.privacyLink}</a>${t.privacyTextEnd}</span>
            </label>
          </div>
          <span class="error-msg" id="error-privacy" style="display:none; color:#cb0101; font-size:12px; margin-top:-10px;">${t.errorPrivacy}</span>

          <button type="submit" id="submit-btn">${t.sendBtn}</button>
          
          <span class="success-msg" id="success-message" style="display:none; color:#22c55e; font-size:14px; text-align:center; margin-top:10px;"></span>

        </form>
    </div>

  </div>
  <img class="contact-purple-shadow" src="assets/images/Purple shadow 4.png" alt="purple shadow">
  <a href="#hero-section" class="go-up-arrow"><img src="assets/images/go-up-arrow.svg" alt="Go up" style="width: 100%; height: auto;"></a>

</section>
  `
}

function renderFooterTemplate() {
  const t = translations[currentLanguage];
  return `
    <footer class="footer">
      <div class="footer-content">
        
        <div class="footer-left">
                <div class="footer-logo">
                    <span><img class="jakob-image" src="assets/images/Jakob.svg" alt="jakob"></span>
                </div>
          <p class="footer-legal">
            <a class="impressum" href="impressum.html">${t.legalNoticeLink}</a> | <a class="datenschutz" href="datenschutz.html">${t.privacyPolicyLink}</a>
          </p>
        </div>

        <div class="footer-center">
          <p class="footer-copyright">© Jakob Moussa 2026</p>
        </div>

        <div class="footer-right">
          <div class="footer-social">
            <a href="https://github.com/JakobMoussa" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src="assets/images/icons/github.svg" alt="GitHub"></a>
            <a href="mailto:contact@jakobmoussa.de" aria-label="Email"><img src="assets/images/icons/Email button.svg" alt="Email"></a>
            <a href="https://www.linkedin.com/in/jakob-moussa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="assets/images/icons/Linkedin button.svg" alt="LinkedIn"></a>
          </div>
        </div>

      </div>
    </footer>
  `
}

