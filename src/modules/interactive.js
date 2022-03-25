// Update completed status and handle check clicks
const isCompleted = (taskArray, fillTask) => {
  const checkBoxs = document.querySelectorAll('.checkBox');
  checkBoxs.forEach((checkBox) => {
    const index = checkBox.getAttribute('id');
    const contentText = checkBox.nextElementSibling.nextElementSibling;
    checkBox.addEventListener('change', (e) => {
      if (e.target.checked) {
        taskArray[index].completed = true;
        fillTask();
        contentText.style.textDecoration = 'line-through';
      } else {
        taskArray[index].completed = false;
        fillTask();
        contentText.style.textDecoration = 'none';
      }
    });
  });
};

// Clear all completed function
const clearAll = (taskArray) => {
  const listItems = document.querySelectorAll('.list-item');
  const clearAllButton = document.querySelector('.clear-completed');
  clearAllButton.addEventListener('click', () => {
    listItems.forEach(
      (item) => item.children[0].children[0].checked && item.remove(),
    );
    taskArray = taskArray.filter((obj) => obj.completed !== true); // Filtering out the array
    if (taskArray.length > 0) {
      taskArray.forEach((entry, i) => {
        entry.index = i;
        localStorage.setItem('taskData', JSON.stringify(taskArray));
      });
    } else {
      localStorage.setItem('taskData', JSON.stringify(taskArray));
    }
  });
};

export { isCompleted, clearAll };
