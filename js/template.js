function HeroTemplate() {
  return `
    <section class="hero">

      <!-- Header -->
      <header class="hero-header">
        <div class="logo">
          <span>Jakob</span>
        </div>

          <div class="right-nav">
            <nav class="nav">
              <a href="#">About me</a>
              <a href="#">Skills</a>
              <a href="#">Portfolio</a>
            </nav>

            <div class="language-switch">
              <button>DE</button>
              <button class="active">EN</button>
            </div>
          </div>
      </header>

      <!-- Hero Content -->
      <div class="hero-content">

        <div class="hero-image">
          <img class="shadow-purple" src="assets/images/Purple shadow Foto.png" alt="glow-purple">
          <img class="shadow-green" src="assets/images/Green shadow Foto.png" alt="glow-green">
          <img class="profile-img" src="assets/images/hero character photo.png" alt="Profile">
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

          <button class="Hero-button">Let’s talk!</button>
        </div>

      </div>

      <img class="vector" src="assets/images/Vector (1).png">
        <span class="scroll-txt">Scroll down
        <img  class="arrow-icon" src="assets/images/icons/arrow.svg"/>
        </span>
      </div>
      <img class="purple-shadow-2" src="assets/images/Purple shadow 2 (1).png" />

    </section>
  `;
}

function renderAboutTemplate() {
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
          <h2>About me</h2>

          <p class="txt">
          Ich interessiere mich für IT und besonders für Programmierung.
          Coding macht mir Spaß, weil ich damit Probleme lösen und eigene Ideen umsetzen kann.
          Ich verbessere mich durch Übung, Tutorials und eigene Projekte.
          </p>

          <div class="about-items">

            <div class="about-item">
              <div class="about-icon">
                <img src="assets/images/icons/11.Location.svg" alt="">
              </div>
              <p class="info-txt">
               Ich bin derzeit in Deutschland ansässig und offen für Remote-Arbeit sowie einen Umzug.
              </p>
            </div>

            <div class="about-item">
              <div class="about-icon">
                <img src="assets/images/icons/12. bulb desktop.svg" alt="">
              </div>
              <p class="info-txt">
                  Ich bin offen für Neues und lerne gerne ständig dazu. 
                  Neue Technologien motivieren mich, meine Fähigkeiten weiterzuentwickeln und mich kontinuierlich zu verbessern.
              </p>
            </div>

            <div class="about-item">
              <div class="about-icon">
                <img src="assets/images/icons/13. puzzle desktop.svg" alt="">
              </div>
              <p class="info-txt">
                Mein Problemlösungsansatz basiert auf analytischem Denken, Kreativität und Ausdauer.
                Ich lerne aus jeder Herausforderung und suche nach möglichst effizienten und eleganten Lösungen.
                Dabei ist mir auch Zusammenarbeit wichtig, um unterschiedliche Perspektiven einzubeziehen.
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
                <p class="bubble-txt">I have a special interest in learning</p>

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

          <h1>My Skills</h1>
          <p class="txt-1">Als Frontend-Entwickler habe ich bereits mit verschiedenen<br>Technologien 
              wie HTML, CSS, JavaScript und<br>modernen Frameworks gearbeitet.
          </p>
          
          <p class="txt-2">
            Looking for <span>another skill?</span>
          </p>

          <p class="txt-3">Es begeistert mich, mein Wissen ständig zu erweitern<br>
              und moderne Tools in meinen Projekten einzusetzen.
          </p>

          <button class="btn">Get in touch</button>
        
        </div>

      </div>
      <img  class="green-shadow-2" src="assets/images/Green shadow 2 (1).png">
  </section>
  
  `
}

function renderPortfolioTemplate() {
  return `
        <section class="portfolio-section">
          <h1 class="portfolio-headline">Portfolio</h1>
          <p>Explore a selection of my work here - 
          Interact with projects to see my skills in action.</p>

          <div class="portfolio-projects">
            <article class="portfolio-project">
              <div class="project-media">
                <img class="join-image" src="assets/images/join.png" alt="Join project preview">
              </div>
              <div class="project-content">
                <h2>Join</h2>
                <h3>Angular | TypeScript | HTML | CSS | Firebase</h3>
                <p class="p-txt">Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.</p>
                <div class="project-actions">
                  <button class="live-btn"><a href="#" class="project-btn">Live test</a></button>
                  <button class="github-btn"><a href="#" class="project-btn">Github</a></button>
                </div>
              </div>
            </article>

            <article class="portfolio-project reverse">
              <div class="project-content">
                <h2>Sharkie</h2>
                <h3>JavaScript | HTML | CSS</h3>
                <p class="p-txt">A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.</p>
                <div class="project-actions">
                  <button class="live-btn"><a href="#" class="project-btn">Live test</a></button>
                  <button class="github-btn"><a href="#" class="project-btn">Github</a></button>
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
                <p class="p-txt">A very simple customer relationship management system working with CRUD functionality.</p>
                <div class="project-actions">
                  <button class="live-btn"><a href="#" class="project-btn">Live test</a></button>
                  <button class="github-btn"><a href="#" class="project-btn">Github</a></button>
                </div>
              </div>
            </article>

            <article class="portfolio-project reverse">
              <div class="project-content">
                <h2>Pokedex</h2>
                <h3>JavaScript | HTML | CSS | Api</h3>
                <p class="p-txt">Based on the PokeAPI a simple library that provides and catalogues pokemon information.</p>
                <div class="project-actions">
                  <button class="live-btn"><a href="#" class="project-btn">Live test</a></button>
                  <button class="github-btn"><a href="#" class="project-btn">Github</a></button>
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
                <p class="p-txt">This app is a Slack clone app. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.</p>
                <div class="project-actions">
                  <button class="live-btn"><a href="#" class="project-btn">Live test</a></button>
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
                  Michael really kept the team together with his great organization and clear communication.
                  We wouldn't have got this far without his commitment.
                </p>
                <div class="testimonial-footer">
                  <span class="testimonial-line"></span>
                  <span class="testimonial-author">V. Schuster - Team Partner</span>
                </div>
              </div>
            </div>

            <div class="testimonial-person-wrap">
              <img class="testimonial-green-shadow" src="assets/images/Green shadow 2 (2).png" alt="">
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
  `
}

function renderContactTemplate() {
  return `
<section class="contact-section">

  <!-- Headline -->
  <div class="contact-headline-container">
    <span class="line"></span>
    <h2 class="contact-headline">Contact</h2>
  </div>

  <!-- Content Bereich -->
  <div class="contact-container">

    <!-- Links -->
    <div class="contact-left">
      <h3>Got a problem to solve?</h3>

      <p>
        Encourage people to contact you and describe what role you are interested in.
        Show that you will add value to their projects through your work.
      </p>

      <p>
        Need a Frontend developer? <strong>Contact me!</strong>
      </p>
    </div>

    <!-- Rechts -->
    <div class="contact-right">
      <form>

        <input type="text" placeholder="Your name" required>
        <input type="email" placeholder="Your email" required>

        <textarea placeholder="Your message" rows="5" required></textarea>

        <div class="checkbox">
          <input type="checkbox" id="privacy" required>
          <label for="privacy">
            I've read the <a href="#">privacy policy</a> and agree to the processing of my data.
          </label>
        </div>

        <button type="submit">Send message :)</button>

      </form>
    </div>

  </div>
  <img class="contact-purple-shadow" src="assets/images/Purple shadow 4.png" alt="purple shadow">

</section>
  `
}
