let counter = 0

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");


btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const btn_class_list = e.target.classList;
        if (btn_class_list.contains("decrease")) { counter--; }
        if (btn_class_list.contains("increase")) { counter++; }
        if (btn_class_list.contains("reset")) { counter = 0; }
        if (counter < 0) { value.style.color = "red"; }
        if (counter > 0) { value.style.color = "green"; }
        if (counter === 0) { value.style.color = "#222"; }
        value.textContent = counter;

    });
});
