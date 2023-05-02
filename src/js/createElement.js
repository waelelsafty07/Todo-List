const createElement = (tag, task = undefined) => {
  const elements = document.createElement(tag);
  if (tag === 'li') {
    elements.className = 'to-do-list-item';
    return elements;
  }
  if (tag === 'input') {
    elements.type = 'checkbox';
    elements.value = task.index;
    elements.checked = task.completed;
    return elements;
  }
  if (tag === 'span') {
    elements.innerHTML = task.description;
    if (task.completed) elements.classList.add('completed');
    return elements;
  }
  return elements;
};

export default createElement;
