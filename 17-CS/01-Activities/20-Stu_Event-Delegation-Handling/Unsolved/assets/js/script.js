const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
  // TODO: Add a comment describing the purpose of this variable.
  //count hold the value of total clicks for each button, starting at 0
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  //restarts the clickHandler function to update the variable count with the ammount of clicks added 
  return function () {

    // TODO: Add a comment describing how this variable is being scoped. 
    //locally scoped inside the clickHandler function 
    count++;
    // TODO: Add a comment describing how we are using the 'count' variable.
    //template literal will hold the value of clicks, incrementing from the count++ above, starting at 0
    //this is reffering to 'buttons' in this context
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
//this for loop is adding an event listener to all buttons, and adding a call to the clickHandler function for all buttons 
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
