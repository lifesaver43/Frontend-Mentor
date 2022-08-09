// MENU BAR
const menu = document.getElementById("menu");
const exit = document.getElementById("exit");
const navBar = document.getElementById("nav-bar");

menu.addEventListener("click", () => {
    navBar.classList.add("active")
});

exit.addEventListener("click", () => {
    navBar.classList.remove("active")
});


// DROP DOWN MENU
const feature = document.getElementById("feature-drop");
const company = document.getElementById("company-drop");
const featureChild = document.querySelector(".feature-child");
const companyChild = document.querySelector(".company-child");
const iconUp1 = document.querySelector(".icon-up1");
const iconUp2 = document.querySelector(".icon-up2");
const iconDown1 = document.querySelector(".icon-down1");
const iconDown2 = document.querySelector(".icon-down2");


feature.addEventListener("click", () => {
    featureChild.classList.toggle("hide")
    iconUp1.classList.toggle("hide")
    iconDown1.classList.toggle("hide")
});

company.addEventListener("click", () => {
    companyChild.classList.toggle("hide")
    iconUp2.classList.toggle("hide")
    iconDown2.classList.toggle("hide")
});


