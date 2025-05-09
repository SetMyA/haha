document.querySelectorAll('article').forEach(article => {
  let clicked = false;
  const content = Array.from(article.children).slice(1); // 忽略 h2 作为标题
  content.forEach(el => el.style.display = 'none'); // 初始隐藏内容

  article.style.cursor = 'pointer';

  article.addEventListener('click', () => {
    // 显示一次 alert
    if (!clicked) {
      alert('哈哈！你点了一篇傻逼文章！');
      clicked = true;
    }

    // 切换内容显示/隐藏
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
