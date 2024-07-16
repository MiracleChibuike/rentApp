

const navigate_HouseHold = document.getElementById("back_Home");

const HouseHold_Nav_Init = () => {
    // Re-direct to the Initial Household page
    window.location.href = "Household.html"
}
navigate_HouseHold.addEventListener("click", (e) => {
        HouseHold_Nav_Init();
})