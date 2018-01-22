var wrap = document.querySelector('.wrap');

window.addEventListener('keydown', (e) => {
  if (e.key === '1' && e.ctrlKey) {
    wrap.classList.toggle('no-mt');
  }
  if (e.key === '2' && e.ctrlKey) {
    wrap.classList.toggle('no-mr');
  }
  if (e.key === '3' && e.ctrlKey) {
    wrap.classList.toggle('wider');
  }
  if (e.key === '4' && e.ctrlKey) {
    wrap.classList.toggle('higher');
  }
  if (e.key === '5' && e.ctrlKey) {
    wrap.classList.toggle('smaller');
  }
  if (e.key === '6' && e.ctrlKey) {
    wrap.classList.toggle('bigger');
  }
});