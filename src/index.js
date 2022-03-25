import './style.css';
import {
  add as Add,
  edit as Edit,
  removeList as Remove,
} from './modules/functionality.js';
import Form from './modules/form.js';

class Task {
  constructor(taskArray) {
    this.taskArray = taskArray;
  }

  render = () => {
    Add(this.taskArray);
    Edit(this.taskArray, this.fillTask);
    Remove(this.taskArray, this.fillTask);

    Form(this.fillTask, this.taskArray);
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
