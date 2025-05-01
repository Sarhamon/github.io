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

        // 인트로 제거
        intro.style.display = "none";

        // 부드럽게 표시 + 배경은 약간 늦게 적용
        setTimeout(() => {
          app.classList.add('visible');
          
          // 이 타이밍에 배경 이미지 적용
          document.body.classList.add('image-bg');
        }, 100); // visible 클래스 부여 직후 적용
      });
  }, 1500);
}, 2500);
