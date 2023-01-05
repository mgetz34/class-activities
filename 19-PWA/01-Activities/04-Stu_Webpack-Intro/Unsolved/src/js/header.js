// TODO: Add a comment explaining the role of `export` in this function `headerClick()`
//headerClick is exported to be imported in to the index.js file of the src/js directory
//this allows the headerClick function to be used outside the scope of this header.js file

export const headerClick = () => {
  const header = document.getElementById('header');
  if (header.style.color === 'blue') {
    header.style.color = 'black';
  } else {
    header.style.color = 'blue';
  }
};
