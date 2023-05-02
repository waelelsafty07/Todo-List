import createTask from './createTask.js';
import eventComplete from './eventComplete.js';
import List from './list.js';
import removeTask from './removeTask.js';

const addNewTaskToList = () => {
  const inputToDO = document.querySelector('.add-todo');
  const unorderdList = document.querySelector('.to-do-list ul');

  inputToDO.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const list = new List();
      const TodoList = {
        description: inputToDO.value,
        completed: false,
      };
      const task = list.addTaskToList(TodoList);
      unorderdList.appendChild(createTask(task));
      inputToDO.value = '';
      eventComplete();
      removeTask();
    }
  });
};

export default addNewTaskToList;