

const navigate_HouseHold = document.getElementById("back_Home");

const HouseHold_Nav_Init = () => {
    // Re-direct to the Initial Household page
    window.location.href = "Household.html"
}
navigate_HouseHold.addEventListener("click", (e) => {
        HouseHold_Nav_Init();
})

// This code is to increase and decrease counts on the Pets section

// Definin each buttons

var reduceCount_1 = document.getElementById("minus_count1");
var addCount_1 = document.getElementById("add_count1");
var count1Element = document.getElementById("count1");
var count1_Num = parseInt(localStorage.getItem("count1")) || 1;

const updateCounts = () => {
    count1Element.textContent = count1_Num;
    localStorage.setItem("count1", count1_Num)
}
const increaseCount1 = () => {
    count1_Num += 1;
    updateCounts()
}
const reduceCount1 = () => {
    if (count1_Num > 0) {
        count1_Num -= 1
    }
    updateCounts()
}
addCount_1.addEventListener("click", (e) => {
    e.preventDefault();
    increaseCount1()
})

reduceCount_1.addEventListener("click", (e) => {
    reduceCount1()
})
updateCounts();

// Second Count
var reduceCount_2 = document.getElementById("minus_count2");
var addCount_2 = document.getElementById("add_count2");
var count_2_Element = document.getElementById("count2");
var count_2Num = parseInt(localStorage.getItem("count2")) || 1;

const updateCounts_2 = () => {
    count_2_Element.textContent = count_2Num;
    localStorage.setItem("count2", count_2Num)
}

const increaseCount_2 = () => {
    count_2Num += 1;
    updateCounts_2()
}
const decrease_Count2 = () => {
    if (count_2Num > 0) {
        count_2Num -= 1;
    }
    updateCounts_2();
}

addCount_2.addEventListener("click", (e) => {
    e.preventDefault()
    increaseCount_2();
});

reduceCount_2.addEventListener("click", (e) => {
    e.preventDefault()
    decrease_Count2();
});

updateCounts_2();

// Third Count
var reduceCount_3 = document.getElementById("minus_count3")
var addCount_3 = document.getElementById("add_count3");
var count_3_Element = document.getElementById("count3");
var count_3Num = parseInt(localStorage.getItem("count3")) || 1;

const updateCount_3 = () => {
    count_3_Element.textContent = count_3Num;
    localStorage.setItem("count3", count_3Num)
}

const increaseCount_3 = () => {
    count_3Num += 1;
    updateCount_3();
}

const decrease_Count3 = () => {
    if (count_3Num > 0) {
        count_3Num -= 1;
        updateCount_3();
    }
}

addCount_3.addEventListener("click", (e) => {
    e.preventDefault();
    increaseCount_3()
    updateCount_3()
});

reduceCount_3.addEventListener("click", (e) => {
    e.preventDefault();
    decrease_Count3();
    updateCount_3()
})

updateCount_3();

// Fourth Count
var reduceCount_4 = document.getElementById("minus_count4");
var addCount_4 = document.getElementById("add_count4");
var count4_Element = document.getElementById("count4");
var count_4_Num = parseInt(localStorage.getItem("count4")) || 1;

const updateCount_4 = () => {
    count4_Element.textContent = count_4_Num;
    localStorage.setItem("count4", count_4_Num)
}


const increaseCount_4 = () => {
    count_4_Num += 1;
    updateCount_4()
};

const decreaseCount_4 = () => {
    if (count_4_Num > 0) {
        count_4_Num -= 1;
        updateCount_4();
    }

};
addCount_4.addEventListener("click", (e) => {
    e.preventDefault();
    increaseCount_4();
});
reduceCount_4.addEventListener("click", (e) => {
    e.preventDefault();
    decreaseCount_4();
});

updateCount_4();

// Last Count

var reduceCount_5 = document.getElementById("minus_count5");
var addCount_5 = document.getElementById("add_count5");
var count5_Element = document.getElementById("count5")
var count_5_Num = parseInt(localStorage.getItem("count5")) || 1;

const updateLastCount = () => {
    count5_Element.textContent = count_5_Num;
    localStorage.setItem("count5", count_5_Num)
};

const increaseLast_count = () => {
    count_5_Num += 1;
    updateLastCount()
}

const decreaseLast_Count = () => {
    if (count_5_Num > 0) {
        count_5_Num -= 1;
    }
    updateLastCount()
}

addCount_5.addEventListener("click", (e) => {
    e.preventDefault();
    increaseLast_count();
});

reduceCount_5.addEventListener("click", (e) => {
    e.preventDefault();
    decreaseLast_Count();
})


updateLastCount()
const Pets_Form = document.getElementById("Pets_Info_Form");
Pets_Form.addEventListener("click", (e) => {
    e.preventDefault();
})