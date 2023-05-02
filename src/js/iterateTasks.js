import createTask from './createTask.js';
import List from './list.js';

const iterateTasks = () => {
  const unorderdList = document.querySelector('.to-do-list ul');
  const lists = new List();

  const sortedList = lists.getLocalStorage().sort((a, b) => a.index - b.index);
  sortedList.forEach((task) => {
    unorderdList.appendChild(createTask(task));
  });
};

export default iterateTasks;
