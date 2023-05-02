const draggedItem = () => {
  const list = document.getElementById('todo-list');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  let draggedItem = null;
  list.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    e.dataTransfer.setData('text/plain', e.target.innerHTML);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
  });
  list.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  list.addEventListener('drop', (e) => {
    const dropTarget = e.target.closest('li');

    if (dropTarget && draggedItem !== dropTarget) {
      const temp = document.createElement('div');
      dropTarget.before(temp);
      draggedItem.before(dropTarget);
      temp.replaceWith(draggedItem);
    }
  });
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('dragstart', (event) => {
      event.preventDefault();
    });
  });
};
export default draggedItem;
