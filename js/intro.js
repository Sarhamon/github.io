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
  
          // 카드처럼 나타나도록 opacity 적용
          setTimeout(() => {
            app.classList.add('visible');
          }, 50);
  
          // 인트로를 완전히 숨김 처리
          intro.style.display = "none";
        });
    }, 1500);
  }, 2500);
  