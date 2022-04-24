const getContainer = () => {
  document.body.innerHTML = '<div>' + '  <ul class="container"></ul>' + '</div>';
  return document.querySelector('.container');
};

export default getContainer;
