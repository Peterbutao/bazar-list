/* Selectors */
const addBazarForm = document.querySelector('#add-bazar');
const bazarOl = document.querySelector('.bazar-ol');

const bazarList = JSON.parse(localStorage.getItem('bazar')) || [];

// Set Localstorage and Display Bazar List
function setLocalStorageANDDisplayBazarList() {
  localStorage.setItem('bazar', JSON.stringify(bazarList));
  displayBazarList(bazarList, bazarOl);
}

/* Functions */
// Add Bazar
function addBazar(e) {
  e.preventDefault();

  const bazarName = this.querySelector('input').value.trim();

  if (!bazarName) {
    alert('Add Bazar is required!');
  } else {
    const bazar = {
      bazarName,
      isComplete: false,
    };
    bazarList.push(bazar);
    // Set Localstorage and Display Bazar List
    setLocalStorageANDDisplayBazarList();
    // Reset Input
    this.reset();
  }
}

// Display Bazar List
function displayBazarList(bazarList, bazarOl) {
  bazarOl.innerHTML = bazarList
    .map((bazar, index) => {
      return /* html */ `
      <div  class="${
        bazar.isComplete ? 'completed' : ''
      } bazar-item bg-white d-flex justify-content-between mt-3" data-index="${index}">
        <li class="bazar-li p-3">${bazar.bazarName}</li>
        <button onclick="completeToggle(this)" class="bazar-complete-btn p-3 bg-success text-white">Complete</button
        ><button onclick="deleteItem(${index})" class="bazar-delete-btn p-3 bg-danger text-white">Delete</button>
      </div>
    `;
    })
    .join('');
}

// Complete Item
function completeToggle(self) {
  const el = self.parentNode;
  const index = el.dataset.index;
  bazarList[index].isComplete = !bazarList[index].isComplete;
  // Set Localstorage and Display Bazar List
  setLocalStorageANDDisplayBazarList();
}

// Delete Item
function deleteItem(index) {
  bazarList.splice(index, 1);
  displayBazarList(bazarList, bazarOl);
  // Set Localstorage and Display Bazar List
  setLocalStorageANDDisplayBazarList();
}

/* Event Listeners */
addBazarForm.addEventListener('submit', addBazar);

// Set Localstorage and Display Bazar List
setLocalStorageANDDisplayBazarList();
