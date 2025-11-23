import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const notificationCards = document.querySelectorAll('.notification-card');

  notificationCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });

  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    });
  });
});
