document.querySelectorAll('article').forEach(article => {
  const content = Array.from(article.children).slice(1); // 忽略 h2 作为标题
  content.forEach(el => el.style.display = 'none'); // 初始隐藏正文

  article.style.cursor = 'pointer';

  article.addEventListener('click', () => {
    // 切换显示/隐藏
    content.forEach(el => {
      if (el.style.display === 'none') {
        el.style.display = 'block';
        el.style.opacity = 0;
        setTimeout(() => el.style.opacity = 1, 10);
      } else {
        el.style.opacity = 0;
        setTimeout(() => el.style.display = 'none', 300);
      }
    });
  });
});
