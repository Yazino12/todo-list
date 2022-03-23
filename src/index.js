import './style.css';

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 1,
  },
];

const listPopulator = () => {
  const container = document.querySelector('.container');
  tasks.forEach((task) => {
    const taskEl = `
    <li class="list-item"><div class="left"><input type="checkbox" id=${task.index} name=${task.index} value=${task.index}>
    <label for=${task.index}>${task.description}</label></div><div class="right"><i class="fa-solid fa-ellipsis-vertical"></i></div>
    </li>`;

    container.innerHTML += taskEl;
  });
};

listPopulator();
