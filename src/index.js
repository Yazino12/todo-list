import './style.css';
import Form from './modules/form.js';
import {
  add as Add,
  edit as Edit,
  removeList as Remove,
} from './modules/functionality.js';
import {
  isCompleted as IsCompleted,
  clearAll as ClearAll,
} from './modules/interactive.js';

class Task {
  constructor(taskArray) {
    this.taskArray = taskArray;
  }

  render = () => {
    Form(this.fillTask, this.taskArray);

    Add(this.taskArray);
    Edit(this.taskArray, this.fillTask);
    Remove(this.taskArray, this.fillTask);

    IsCompleted(this.taskArray, this.fillTask);
    ClearAll(this.taskArray);
  };

  // Fill tasks array & localstorage

  fillTask = (data) => {
    if (data) {
      this.taskArray.push(data);
      localStorage.setItem('taskData', JSON.stringify(this.taskArray));
    } else {
      localStorage.setItem('taskData', JSON.stringify(this.taskArray));
    }
  };
}

const initializer = new Task(
  JSON.parse(localStorage.getItem('taskData')) || [],
);
initializer.render();
initializer.fillTask();
