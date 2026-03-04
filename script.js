const themeBtn = document.getElementById("theme-btn");
const body = document.body;

let statoSalvato = localStorage.getItem("tema");

if (statoSalvato === "dark") {
    body.classList.add("dark-mode");
}

themeBtn.addEventListener('click', ()=>{
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "dark");
    }
    else{
        localStorage.setItem("tema", "light");
    }
});
