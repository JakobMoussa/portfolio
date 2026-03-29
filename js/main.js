function renderHero() {
  document.getElementById("hero-section").innerHTML = HeroTemplate();
}

function renderAbout() {
  document.getElementById("about-section").innerHTML = renderAboutTemplate();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
});