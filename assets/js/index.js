

// Prevent Form Reload on Default Personal Info

// Prevent Form Reload on Default Personal Info
const personal_Form = document.getElementById("form_Personal_Info");
const legal_Name = document.getElementById("legal_Name");
const middle_name = document.getElementById("Middle_Name");
const last_name = document.getElementById("last_Name");

const handleInputValidation = (input, validationMessageId) => {
  const validationMessage = document.getElementById(validationMessageId);
  if (input.value.trim() === "") {
    validationMessage.style.display = "block";
    return false;
  } else {
    validationMessage.style.display = "none";
    return true;
  }
};

const checkForm_Inputs = () => {
  const isLegalNameValid = handleInputValidation(
    legal_Name,
    "Name_Validate_legal"
  );
  const isMiddleNameValid = handleInputValidation(
    middle_name,
    "Middle_name_val"
  );
  const isLastNameValid = handleInputValidation(
    last_name, "last_name_val"
  );

  // Log the input values
  console.log(
    `Legal Name: ${legal_Name.value} \n Middle Name: ${middle_name.value} \n Last Name: ${last_name.value}`
  );

  // If all inputs are valid, return true
  return isLegalNameValid && isMiddleNameValid && isLastNameValid;
};

legal_Name.addEventListener("keyup", (e) => {
  e.preventDefault();
  handleInputValidation(legal_Name, "Name_Validate_legal");
});

middle_name.addEventListener("keyup", (e) => {
  e.preventDefault();
  handleInputValidation(middle_name, "Middle_name_val");
});

last_name.addEventListener("keyup", (e) => {
  e.preventDefault();
  handleInputValidation(last_name, "last_name_val");
});

personal_Form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkForm_Inputs()) {
    // Store input values in local storage before redirecting
    localStorage.setItem("legal_Name", legal_Name.value);
    localStorage.setItem("Middle_Name", middle_name.value);
    localStorage.setItem("last_Name", last_name.value);


    alert("Proceeding to the next section.......")

    // Redirect to the household page if all inputs are valid
    window.location.href = "Household.html";
  }
});

    // Retrieve input values from local storage
        const legalNameInput = document.getElementById("legal_Name");
        const middleNameInput = document.getElementById("Middle_Name");
        const lastNameInput = document.getElementById("last_Name");

        if (legalNameInput && middleNameInput && lastNameInput) {
            legalNameInput.value = localStorage.getItem("legal_Name") || "";
            middleNameInput.value = localStorage.getItem("Middle_Name") || "";
            lastNameInput.value = localStorage.getItem("last_Name") || "";
        }


