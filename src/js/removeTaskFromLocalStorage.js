import List from './list.js';

const removeTaskFromLocalStorage = (index) => {
  const list = new List();
  list.removeTaskFromList(Number(index));
};

export default removeTaskFromLocalStorage;
