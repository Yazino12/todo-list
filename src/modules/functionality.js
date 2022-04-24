import Container from './container.js';

// Global Variables
const deleteItem = (taskArray, fillTask, el) => {
  const index = parseInt(el.children[0].children[0].getAttribute('id'), 10);
  taskArray.splice(index, 1);
  taskArray.forEach((entry, i) => {
    entry.index = i;
  });
  fillTask();
  el.remove();
  window.location.reload();
};

let trigerring = false;

// ADD FUNCTIONALITY

const add = (tasks) => {
  const container = Container();
  tasks.forEach((task) => {
    const taskEl = `
      <li class="list-item"><div class="left"><input class="checkBox" type="checkbox" id=${task.index} name=${task.description} value=${task.description}>
      <label for=${task.index} hidden>${task.description}</label><textarea class="edit" maxlength="255" spellcheck="false" focus>${task.description}</textarea></div><div class="right"><i class="fa-solid fa-ellipsis-vertical drag"></i><i class="fa-solid fa-trash-can delete"></i></div>
      </li>`;

    container.innerHTML += taskEl;
    task.completed = false;
  });
};

// REMOVE FUNCTIONALITY

const removeList = (taskArray, fillTask) => {
  const delIcons = document.querySelectorAll('.delete');
  delIcons.forEach((delIcon) => {
    delIcon.addEventListener('mousedown', () => {
      trigerring = true;
      const listEl = delIcon.parentNode.parentElement;
      deleteItem(taskArray, fillTask, listEl);
    });
  });
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
      textArea.style.textDecoration = 'none'; // Removing line-through style
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
      const checkBox = listEl.children[0].children[0];
      if (checkBox.checked) textArea.style.textDecoration = 'line-through'; // Adding line-through style
      listEl.classList.remove('editing'); // Li element
      listEl.children[1].children[0].classList.remove('hidden'); // Vertical dots icon
      listEl.children[1].children[1].classList.add('hidden'); // Delete icon

      const index = textArea.parentElement.children[0].getAttribute('id');
      if (!trigerring) {
        if (newDesc.trim()) {
          taskArray[index].description = newDesc.trim();
          fillTask();
        } else {
          deleteItem(taskArray, fillTask, listEl);
        }
      }
      newDesc = '';
      trigerring = false;
    });
  });
};

export {
  add, deleteItem, edit, removeList,
};
