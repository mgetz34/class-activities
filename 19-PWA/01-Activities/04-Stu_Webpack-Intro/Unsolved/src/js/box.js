// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
//boxClick is exported to be imported in to the index.js file of the src/js directory
//this allows the boxClick function to be used outside the scope of this box.js file

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
