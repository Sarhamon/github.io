// intro.js

setTimeout(() => {
  const intro = document.getElementById('intro');
  intro.classList.add('fade-out');

  setTimeout(() => {
    fetch('view/body.html')
      .then(res => res.text())
      .then(html => {
        const app = document.getElementById('app');
        app.innerHTML = html;
        app.classList.remove('hidden');
        
        // 카드처럼 자연스럽게 나타나기
        setTimeout(() => {
          app.classList.add('visible');
        }, 50);

        // 인트로 완전히 제거
        intro.style.display = "none";
      });
  }, 1500); // fadeOut 애니메이션 시간
}, 2500); // intro 표시 시간
