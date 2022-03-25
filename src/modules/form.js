const formAction = (fillTask, taskArray) => {
  const form = document.querySelector('.add');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const [desc] = form.elements;
    if (desc.value.trim()) {
      const taskData = {
        description: desc.value.trim(),
        completed: false,
        index: taskArray.length,
      };
      fillTask(taskData);
      desc.value = '';
      window.location.reload();
    }
  });
};

export default formAction;
