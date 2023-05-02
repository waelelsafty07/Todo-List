import createElement from './createElement.js';

const createTask = (task) => {
  const li = createElement('li', task);
  const label = createElement('label');
  const input = createElement('input', task);
  const span = createElement('span', task);
  label.appendChild(input);
  label.appendChild(span);
  li.appendChild(label);
  return li;
};

export default createTask;
