// Retrieve input values from local storage
const legalName = localStorage.getItem("legal_Name");
const middleName = localStorage.getItem("Middle_Name");
const lastName = localStorage.getItem("last_Name");

const navigate_Home = document.getElementById("back_Home");
const cancel_Img = document.getElementById("cancel_Icon");

const goTo_Home = () => {
  // Redirect back to the Home(Personal Info)
  window.location.href = "index.html";
};

navigate_Home.addEventListener("click", (e) => {
  e.preventDefault();
  goTo_Home();
});

// Handle the counts - To add and or decrease the counts whent the buttons are clicked
// Also to store and retrieve counts values when page reloads
var count_Number = document.getElementById("count");
var reduce_count = document.getElementById("minus_count");
var add_Count = document.getElementById("add_count");
var count = parseInt(localStorage.getItem("count")) || 1;
var validation_Message = document.getElementById("validate_Values");

const check_CountElements = () => {
  if ((count === 0)) {
    validation_Message.style.display = "block";
  } else if ((count += 1)) {
    validation_Message.style.display = "none";
  }
};

const updateCounts = () => {
  count_Number.textContent = count;
  localStorage.setItem("count", count);
};
const increase_Count = () => {
  count += 1;
  updateCounts();
  // check_CountElements()
};
const decrease_Count = () => {
  if (count > 0) {
    count -= 1;
    updateCounts();
  }
};

add_Count.addEventListener("click", (e) => {
  e.preventDefault();
  increase_Count();
  check_CountElements();
});

reduce_count.addEventListener("click", (e) => {
  e.preventDefault();
  decrease_Count();
});

updateCounts();
check_CountElements();

const houseHold_Form = document.getElementById("household_info_form");
houseHold_Form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (count === 0) {
    validation_Message.style.display = "block";
  } else {
    validation_Message.style.display = "none";
    alert("Proceeding to the next section......");
    window.location.href = "Pets.html"
  }
});
