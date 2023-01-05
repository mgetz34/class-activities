// Grab the target element
const targetElOne = document.getElementById('targetOne');

// Clear out the loading message that exists in the target element
targetElOne.innerHTML = '';

// Create a new element in memory
const moduleContent = document.createElement('div');
moduleContent.id = 'module-1';

// Add some content to the new element
moduleContent.innerHTML = `
<div class="article-container">
<div class="row">
  <div class="col s12">
    <div class="card darken-1">
      <div class="card-content dark-text">
        <span class="card-title">React is a great frontend library</span>
      </div>
    </div>
  </div>
</div>
</div>`;

// Append the new element to the target element
targetElOne.appendChild(moduleContent);
