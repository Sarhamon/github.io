// intro.js

// 텍스트 fade-in 후 → fade-out
setTimeout(() => {
  const intro = document.getElementById('intro');
  intro.classList.add('fade-out');

  // intro 사라지고 나서 info.html을 초기 카드로 로딩
  setTimeout(() => {
    fetch('views/info.html') // ✅ info만 먼저 불러오기
      .then(res => res.text())
      .then(html => {
        const slideContent = document.getElementById('slide-content'); // id 변경!
        slideContent.innerHTML = html;
        slideContent.classList.add('fade-in');
      });
  }, 1500);
}, 2500);
