import createTask from './createTask.js';

const iterateTasks = (lists) => {
  const unorderdList = document.querySelector('.to-do-list ul');
  lists.sort((a, b) => a.index - b.index);
  lists.forEach((task) => {
    unorderdList.appendChild(createTask(task));
  });
};

export default iterateTasks;
