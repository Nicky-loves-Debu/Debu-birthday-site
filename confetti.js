
window.onload = () => {
  const confetti = document.createElement('div');
  confetti.innerHTML = '🎉🎉🎉';
  confetti.style.position = 'fixed';
  confetti.style.bottom = '0';
  confetti.style.left = '50%';
  confetti.style.transform = 'translateX(-50%)';
  confetti.style.fontSize = '40px';
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 3000);
};
