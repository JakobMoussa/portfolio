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
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderPortfolio();

});