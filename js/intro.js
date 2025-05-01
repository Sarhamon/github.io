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

        // 부드럽게 표시
        setTimeout(() => {
          app.classList.add('visible');
        }, 50);

        // 배경 이미지 + 오버레이 적용
        document.body.classList.add('image-bg');

        // 인트로 제거
        intro.style.display = "none";
      });
  }, 1500);
}, 2500);
