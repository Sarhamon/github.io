const slideContent = document.getElementById('slide-content');

function loadSlide(view) {
  fetch(`views/${view}.html`)
    .then(res => res.text())
    .then(html => {
      slideContent.classList.remove("fade-in");
      void slideContent.offsetWidth; // reflow
      slideContent.innerHTML = html;
      slideContent.classList.add("fade-in");
    });
}

document.querySelectorAll('.side-menu li').forEach(item => {
  item.addEventListener('click', () => {
    const view = item.textContent.toLowerCase(); // info, langs, projects
    loadSlide(view);
  });
});
