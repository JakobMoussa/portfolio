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

      <div class="scroll-indicator">
        <span>Scroll down</span>
      </div>

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
          <a href="#"><img src="github-icon.svg" alt="GitHub"></a>
          <a href="#"><img src="mail-icon.svg" alt="Mail"></a>
          <a href="#"><img src="linkedin-icon.svg" alt="LinkedIn"></a>
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

          <p>
          Text1
          </p>

          <div class="about-items">

            <div class="about-item">
              <div class="about-icon">
                <img src="location-icon.svg" alt="">
              </div>
              <p>
               Text 2
              </p>
            </div>

            <div class="about-item">
              <div class="about-icon">
                <img src="bulb-icon.svg" alt="">
              </div>
              <p>
               Text 3
              </p>
            </div>

            <div class="about-item">
              <div class="about-icon">
                <img src="puzzle-icon.svg" alt="">
              </div>
              <p>
                Text 4
              </p>
            </div>

          </div>
        </div>

        <!-- Right -->
        <div class="about-image">
          <div class="image-circle">
            <img src="" alt="Jakob">
          </div>
          <div class="image-line"></div>
        </div>

      </div>

    </section>
  `;
}
