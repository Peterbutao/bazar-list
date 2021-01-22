// Selectors
const addBazarInput = document.querySelector(".add-bazar-input");
const addBazarBtn = document.querySelector(".add-bazar-btn");
const bazarOl = document.querySelector(".bazar-ol");

// Event Listeners
addBazarBtn.addEventListener("click", bazarItems);

// Functions
function bazarItems(event) {
  // Prevent Default
  event.preventDefault();
  if (addBazarInput.value === "") {
    alert("ADD BAZAR is required");
  } else {
    // Create Bazar Item
    const bazarItem = document.createElement("div");
    bazarItem.classList.add(
      "bazar-item",
      "bg-white",
      "d-flex",
      "justify-content-between",
      "mt-3"
    );
    bazarOl.appendChild(bazarItem);
    // Create Bazar Li
    const bazarLi = document.createElement("li");
    bazarLi.innerHTML = addBazarInput.value;
    bazarLi.classList.add("bazar-li", "p-3");
    bazarItem.appendChild(bazarLi);
    // Create Bazar Complete Btn
    const bazarCompleteBtn = document.createElement("button");
    bazarCompleteBtn.innerHTML = "Complete";
    bazarCompleteBtn.classList.add(
      "bazar-complete-btn",
      "p-3",
      "bg-success",
      "text-white"
    );
    bazarItem.appendChild(bazarCompleteBtn);
    // Create Bazar Delete Btn
    const bazarDeleteBtn = document.createElement("button");
    bazarDeleteBtn.innerHTML = "Delete";
    bazarDeleteBtn.classList.add(
      "bazar-delete-btn",
      "p-3",
      "bg-danger",
      "text-white"
    );
    bazarItem.appendChild(bazarDeleteBtn);
    // Clear Add Bazar Input Value
    addBazarInput.value = "";
    // Complete and Delete Btn
    bazarItem.addEventListener("click", completeDeleteFunc);
    function completeDeleteFunc(event) {
      const item = event.target;
      if (item.classList[0] === "bazar-delete-btn") {
        const bazarItem = item.parentElement;
        bazarItem.remove();
      }
      if (item.classList[0] === "bazar-complete-btn") {
        const bazarItem = item.parentElement;
        bazarItem.classList.toggle("completed");
      }
    }
  }
}
