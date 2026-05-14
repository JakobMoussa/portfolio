let currentLanguage = 'EN';

const translations = {
  EN: {
    navAbout: "About me",
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    heroAm: "I am",
    heroRole: "FRONTEND DEVELOPER",
    heroBtn: "Let’s talk!",
    heroScroll: "Scroll down",

    aboutMeTitle: "About me",
    aboutMeText: "I am interested in IT and especially in programming. Coding is fun for me because I can use it to solve problems and implement my own ideas. I improve myself through practice, tutorials, and personal projects.",
    aboutLocText: "I am currently based in Germany and open to remote work as well as relocation.",
    aboutLearnText: "I am open to new things and love to learn constantly. New technologies motivate me to develop my skills further and continuously improve myself.",
    aboutSolveText: "My approach to problem-solving is based on analytical thinking, creativity, and perseverance. I learn from every challenge and look for the most efficient and elegant solutions possible. Collaboration is also important to me, to incorporate different perspectives.",

    skillsSpecial: "I have a special interest in learning",
    skillsTitle: "My Skills",
    skillsTxt1: "As a frontend developer, I have already worked with<br>modern web technologies and frameworks.",
    skillsTxt2_1: "Looking for ",
    skillsTxt2_2: "another skill?",
    skillsTxt3: "I am passionate about constantly expanding my knowledge<br>and using modern tools in my projects.",
    skillsBtn: "Get in touch",

    portfolioTitle: "Portfolio",
    portfolioDesc: "Explore a selection of my work here - Interact with projects to see my skills in action.",
    joinDesc: "Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
    liveTest: "Live test",
    sharkieDesc: "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.",
    crmDesc: "A very simple customer relationship management system working with CRUD functionality.",
    pokeDesc: "Based on the PokeAPI a simple library that provides and catalogues pokemon information.",
    daDesc: "This app is a Slack clone app. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",

    contactTitle: "Contact",
    contactProb: "Got a problem to solve?",
    contactDesc1: "Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.",
    contactDesc2_1: "Need a Frontend developer? ",
    contactDesc2_2: "Contact me!",
    placeholderName: "Your name",
    placeholderEmail: "Your email",
    placeholderMsg: "Your message",
    privacyText: "I've read the ",
    privacyLink: "privacy policy",
    privacyTextEnd: " and agree to the processing of my data.",
    sendBtn: "Send message :)",

    legalNotice: "Legal Notice",
  },
  DE: {
    navAbout: "Über mich",
    navSkills: "Fähigkeiten",
    navPortfolio: "Portfolio",
    heroBtn: "Lass uns reden!",
    heroScroll: "Runter scrollen",

    aboutMeTitle: "Über mich",
    aboutMeText: "Ich interessiere mich für IT und besonders für Programmierung. Coding macht mir Spaß, weil ich damit Probleme lösen und eigene Ideen umsetzen kann. Ich verbessere mich durch Übung, Tutorials und eigene Projekte.",
    aboutLocText: "Ich bin derzeit in Deutschland ansässig und offen für Remote-Arbeit sowie einen Umzug.",
    aboutLearnText: "Ich bin offen für Neues und lerne gerne ständig dazu. Neue Technologien motivieren mich, meine Fähigkeiten weiterzuentwickeln und mich kontinuierlich zu verbessern.",
    aboutSolveText: "Mein Problemlösungsansatz basiert auf analytischem Denken, Kreativität und Ausdauer. Ich lerne aus jeder Herausforderung und suche nach möglichst effizienten und eleganten Lösungen. Dabei ist mir auch Zusammenarbeit wichtig, um unterschiedliche Perspektiven einzubeziehen.",

    skillsSpecial: "Mein besonderes Interesse gilt dem Lernen",
    skillsTitle: "Fähigkeiten",
    skillsTxt1: "Als Frontend-Entwickler habe ich bereits mit<br>modernen Webtechnologien und Frameworks gearbeitet.",
    skillsTxt2_1: "Suchst du nach ",
    skillsTxt2_2: "einer anderen Fähigkeit?",
    skillsTxt3: "Es begeistert mich, mein Wissen ständig zu erweitern<br>und moderne Tools in meinen Projekten einzusetzen.",
    skillsBtn: "Kontakt aufnehmen",

    portfolioTitle: "Portfolio",
    portfolioDesc: "Entdecke hier eine Auswahl meiner Arbeiten - Interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.",
    joinDesc: "Ein vom Kanban-System inspirierter Task-Manager. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.",
    liveTest: "Live-Test",
    sharkieDesc: "Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Schwertwal zu kämpfen.",
    crmDesc: "Ein sehr einfaches Customer-Relationship-Management-System, das mit CRUD-Funktionalität arbeitet.",
    pokeDesc: "Basierend auf der PokeAPI, eine einfache Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.",
    daDesc: "Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und Zusammenarbeit mit einer intuitiven Benutzeroberfläche, Echtzeit-Nachrichten und einer robusten Kanalorganisation.",

    contactTitle: "Kontakt",
    contactProb: "Hast du ein Problem zu lösen?",
    contactDesc1: "Ermutige Leute, dich zu kontaktieren und beschreibe, an welcher Rolle du interessiert bist. Zeige, dass du ihren Projekten durch deine Arbeit einen Mehrwert bieten wirst.",
    contactDesc2_1: "Brauchst du einen Frontend-Entwickler? ",
    contactDesc2_2: "Kontaktiere mich!",
    placeholderName: "Dein Name",
    placeholderEmail: "Deine E-Mail",
    placeholderMsg: "Deine Nachricht",
    privacyText: "Ich habe die ",
    privacyLink: "Datenschutzrichtlinie",
    privacyTextEnd: " gelesen und stimme der Verarbeitung meiner Daten zu.",
    sendBtn: "Nachricht senden :)",

    legalNotice: "Impressum",
  }
};

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
            </nav>

            <div class="language-switch">
              <button class="${currentLanguage === 'DE' ? 'active' : ''}">DE</button>
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
              <span>I am</span>
            </div>

            <div class="hero-main-text">
              <h1>Jakob Moussa</h1>
              <h2>FRONTEND DEVELOPER</h2>
            </div>
          </div>

          <button class="Hero-button">${t.heroBtn}</button>
        </div>

      </div>

      <img class="vector" src="assets/images/Vector (1).png">
        <span class="scroll-txt">${t.heroScroll}
        <img  class="arrow-icon" src="assets/images/icons/arrow.svg"/>
        </span>
      </div>
      <img class="purple-shadow-2" src="assets/images/Purple shadow 2 (1).png" />

    </section>
  `;
}

function renderAboutTemplate() {
  const t = translations[currentLanguage];
  return `
    <section class="about-me">

      <!-- Top Bar -->
      <div class="about-topbar">
        <div class="topbar-line"></div>

        <div class="social-links">
          <a href="#"><img src="assets/images/icons/github.svg" alt="GitHub"></a>
          <a href="#"><img src="assets/images/icons/Email button.svg" alt="Mail"></a>
          <a href="#"><img src="assets/images/icons/Linkedin button.svg" alt="LinkedIn"></a>
        </div>

        <div class="email">
          <a href="mailto:jakobmoussa@gmail.com">jakobmoussa@gmail.com</a>
        </div>
      </div>

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
            <img class="icon" src="assets/images/icons/icon-1.svg">
            <img class="icon" src="assets/images/icons/icon-2.svg">
            <img class="icon" src="assets/images/icons/icon-3.svg">
            <img class="icon" src="assets/images/icons/icon-4.svg">
            <img class="icon" src="assets/images/icons/icon-5.svg">
            <img class="icon" src="assets/images/icons/icon-6.svg">
            <img class="icon" src="assets/images/icons/icon-7.svg">
            <img class="icon" src="assets/images/icons/icon-8.svg">
            <img class="icon" src="assets/images/icons/icon-9.svg">
            <img class="icon" src="assets/images/icons/icon-10.svg">
            <div class="special-icon">
            <div class="learning-card">
              <img class="main-icon" src="assets/images/icons/icon-11.svg" alt="Learning Icon">
              <div class="skill-bubble">
                <p class="bubble-txt">${t.skillsSpecial}</p>

                <div class="bubble-icons">
                  <img src="assets/images/icons/react.svg" alt="React">
                  <img src="assets/images/icons/vue.svg" alt="Vue">
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

          <button class="btn">${t.skillsBtn}</button>
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
                  <button class="live-btn"><a href="https://jakob-moussa.developerakademie.net/6-join/index.html" class="project-btn">${t.liveTest}</a></button>
                  <button class="github-btn"><a href="https://github.com/JakobMoussa/Join" class="project-btn">Github</a></button>
                </div>
              </div>
            </article>

            <article class="portfolio-project reverse">
              <div class="project-content">
                <h2>Sharkie</h2>
                <h3>JavaScript | HTML | CSS</h3>
                <p class="p-txt">${t.sharkieDesc}</p>
                <div class="project-actions">
                  <button class="live-btn"><a href="https://jakob-moussa.developerakademie.net/Sharkie/index.html" class="project-btn">${t.liveTest}</a></button>
                  <button class="github-btn"><a href="https://github.com/JakobMoussa/sharkie" class="project-btn">Github</a></button>
                </div>
              </div>
              <div class="project-media">
                <img class="sharkie-image" src="assets/images/sharkie.png">
              </div>
            </article>

            <article class="portfolio-project">
              <img class="crm-shadow" src="assets/images/icons/Purple shadow 3.png" alt="">
              <div class="project-media crm-media">
                <img class="crm-photo" src="assets/images/Simple CRM photo.png">
              </div>
              <div class="project-content">
                <h2>Simple CRM</h2>
                <h3>Angular | Firebase</h3>
                <p class="p-txt">${t.crmDesc}</p>
                <div class="project-actions">
                  <button class="live-btn"><a href="#" class="project-btn">${t.liveTest}</a></button>
                  <button class="github-btn"><a href="#" class="project-btn">Github</a></button>
                </div>
              </div>
            </article>

            <article class="portfolio-project reverse">
              <div class="project-content">
                <h2>Pokedex</h2>
                <h3>JavaScript | HTML | CSS | Api</h3>
                <p class="p-txt">${t.pokeDesc}</p>
                <div class="project-actions">
                  <button class="live-btn"><a href="https://jakob-moussa.developerakademie.net/Pokomon/index.html" class="project-btn">${t.liveTest}</a></button>
                  <button class="github-btn"><a href="https://github.com/JakobMoussa/pokedex" class="project-btn">Github</a></button>
                </div>
              </div>
              <div class="project-media">
                <img src="assets/images/Pokédex photo.png">
              </div>
            </article>

            <article class="portfolio-project">
              <div class="project-media">
                <img src="assets/images/DA Bubble.png">
              </div>
              <div class="project-content">
                <h2>DA Bubble</h2>
                <h3>Angular | TypeScript | Firebase</h3>
                <p class="p-txt">${t.daDesc}</p>
                <div class="project-actions">
                  <button class="live-btn"><a href="#" class="project-btn">${t.liveTest}</a></button>
                  <button class="github-btn"><a href="#" class="project-btn">Github</a></button>
                </div>
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
      <form id="contact-form">

        <input type="text" id="contact-name" placeholder="${t.placeholderName}" required>
        <input type="email" id="contact-email" placeholder="${t.placeholderEmail}" required>

        <textarea id="contact-message" placeholder="${t.placeholderMsg}" rows="5" required></textarea>

        <div class="checkbox">
          <input type="checkbox" id="privacy" required>
          <label for="privacy">
            ${t.privacyText}<a href="#">${t.privacyLink}</a>${t.privacyTextEnd}
          </label>
        </div>

        <button type="submit">${t.sendBtn}</button>

      </form>
    </div>

  </div>
  <img class="contact-purple-shadow" src="assets/images/Purple shadow 4.png" alt="purple shadow">
  <a href="#hero-section" class="go-up-arrow"><img src="assets/images/go-up-arrow.png" alt="Go up" style="width: 100%; height: auto;"></a>

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
            <span>Jakob</span>
          </div>
          <p class="footer-legal">${t.legalNotice}</p>
        </div>

        <div class="footer-center">
          <p class="footer-copyright">© Jakob Moussa 2024</p>
        </div>

        <div class="footer-right">
          <div class="footer-social">
            <a href="https://github.com/JakobMoussa" aria-label="GitHub"><img src="assets/images/icons/github.svg" alt="GitHub"></a>
            <a href="#" aria-label="Email"><img src="assets/images/icons/Email button.svg" alt="Email"></a>
            <a href="https://www.linkedin.com/in/jakob-moussa/" aria-label="LinkedIn"><img src="assets/images/icons/Linkedin button.svg" alt="LinkedIn"></a>
          </div>
        </div>

      </div>
    </footer>
  `
}
