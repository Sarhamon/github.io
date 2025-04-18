// intro.js

// 1. 텍스트 페이드인 후 → 페이드아웃
setTimeout(() => {
    const intro = document.getElementById('intro');
    intro.classList.add('fade-out');
  
    // 2. intro가 사라진 뒤 → home.html 내용 로딩
    setTimeout(() => {
      fetch('home.html')
        .then(res => res.text())
        .then(html => {
          const homeDiv = document.getElementById('home');
          homeDiv.innerHTML = html;
          homeDiv.classList.remove('hidden');
  
          // 스타일 transition을 위해 딜레이 후 fade-in
          setTimeout(() => {
            homeDiv.classList.add('visible');
          }, 50);
        });
    }, 1500); // fade-out 끝난 뒤
  }, 2500); // 텍스트 보여지는 시간
  