// ADD FUNCTIONALITY

const add = (tasks) => {
  const container = document.querySelector('.container');
  tasks.forEach((task) => {
    const taskEl = `
      <li class="list-item"><div class="left"><input type="checkbox" id=${task.index} name=${task.description} value=${task.description}>
      <label for=${task.index} hidden>${task.description}</label><textarea class="edit" maxlength="255" spellcheck="false" focus>${task.description}</textarea></div><div class="right"><i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-trash-can delete"></i></div>
      </li>`;

    container.innerHTML += taskEl;
  });
};

// REMOVE FUNCTIONALITY

const removeList = (taskArray, fillTask, el) => {
  const index = parseInt(el.children[0].children[0].getAttribute('id'), 10);
  taskArray.splice(index, 1);
  taskArray.forEach((entry, i) => {
    entry.index = i;
  });
  fillTask();
  el.remove();
};

// EDIT FUNCTIONALITY

const edit = (taskArray, fillTask) => {
  const listItems = document.querySelectorAll('.list-item');
  const textAreas = document.querySelectorAll('textarea');
  let newDesc = '';

  listItems.forEach((listItem) => {
    const deleteIcon = listItem.children[1].children[1];
    deleteIcon.classList.add('hidden');
  });

  textAreas.forEach((textArea) => {
    textArea.addEventListener('focusin', () => {
      const listEl = textArea.parentNode.parentElement;
      listEl.classList.add('editing'); // Li element
      listEl.children[1].children[0].classList.add('hidden'); // Vertical dots icon
      listEl.children[1].children[1].classList.remove('hidden'); // Delete icon
      newDesc = textArea.value;
      textArea.addEventListener('input', () => {
        newDesc = textArea.value;
      });
    });

    textArea.addEventListener('focusout', () => {
      const listEl = textArea.parentNode.parentElement;
      listEl.classList.remove('editing'); // Li element
      listEl.children[1].children[0].classList.remove('hidden'); // Vertical dots icon
      listEl.children[1].children[1].classList.add('hidden'); // Delete icon

      const index = textArea.parentElement.children[0].getAttribute('id');
      if (newDesc.trim()) {
        taskArray[index].description = newDesc.trim();
        fillTask();
        newDesc = '';
      } else {
        removeList(taskArray, fillTask, listEl);
      }
    });
  });
};

export { add, edit };
