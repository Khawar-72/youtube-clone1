// JS Search Function
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const videos = document.querySelectorAll('.video-card');

  videos.forEach(video => {
    const title = video.getAttribute('data-title').toLowerCase();
    if (title.includes(filter)) {
      video.style.display = '';
    } else {
      video.style.display = 'none';
    }
  });
});
