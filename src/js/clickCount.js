import removeTaskFromLocalStorage from './removeTaskFromLocalStorage.js';

const clickCountAction = (btn, clickCount) => {
  const icon = btn.querySelector('i');

  if (clickCount === 0) {
    icon.classList.add('fa-trash-can');
    icon.classList.remove('fa-ellipsis-vertical');
  }
  if (clickCount > 0 && icon.classList.contains('fa-trash-can')) {
    const index = btn.getAttribute('index');
    removeTaskFromLocalStorage(index);
    const parent = btn.parentElement;
    parent.remove();
  }
};
export default clickCountAction;
