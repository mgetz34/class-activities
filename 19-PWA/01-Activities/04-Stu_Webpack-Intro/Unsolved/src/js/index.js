// TODO: Add a comment explaining role of the index.js file and import statements

//these imports are from the exports of both the header.js and the box.js files. This allows the index.js file
//to use the functionality of both files utilizing dom manipulation 

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
