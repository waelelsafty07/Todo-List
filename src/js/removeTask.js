import clickCountAction from './clickCount.js';

const removeTask = () => {
  const buttonTasks = document.querySelectorAll('.btn-task');
  buttonTasks.forEach((btn) => {
    let clickCount = 0;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      clickCountAction(btn, clickCount);
      clickCount += 1;
    });
  });
};

export default removeTask;
