

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