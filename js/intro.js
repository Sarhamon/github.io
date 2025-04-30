// intro.js

// 1. 인트로 페이드아웃 후 body.html 불러오기
setTimeout(() => {
    const intro = document.getElementById('intro');
    intro.classList.add('fade-out');
  
    // 2. fade-out 끝난 후 본문 로딩
    setTimeout(() => {
      fetch('view/body.html')
        .then(res => res.text())
        .then(html => {
          const app = document.getElementById('app');
          app.innerHTML = html;
          app.classList.remove('hidden');
        });
    }, 1500); // fadeOut 애니메이션 길이와 맞춤
  }, 2500); // 텍스트 보여주는 시간
  