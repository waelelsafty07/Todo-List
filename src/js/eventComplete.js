const eventComplete = () => {
  const listItems = document.querySelectorAll('.to-do-list-item');
  listItems.forEach((item) => {
    item.addEventListener('change', () => {
      item.classList.toggle('completed');
    });
  });
};
export default eventComplete;
