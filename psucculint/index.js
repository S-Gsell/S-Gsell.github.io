/* 
    1. Navbar 
    2. Gaddis Formatting
*/


// 1. Navbar
var navOpen = false;
const navInner = document.querySelector(".linkContainer");
const burger = document.querySelector("#navBurger");
const line1 = document.querySelector("#burger1");
const line2 = document.querySelector("#burger2");
const line3 = document.querySelector("#burger3");

burger.onclick = (e) => {
    //transform burger to red x and slide nav in
    if(!navOpen){
        line1.style.backgroundColor = "var(--redColor)";
        line1.style.transform = "translateY(8px)";
        line1.style.borderRadius = "2px";
        line2.style.backgroundColor = "transparent";
        line3.style.backgroundColor = "var(--redColor)";
        line3.style.transform = "translateY(-8px)";
        line3.style.borderRadius = "2px";

        navInner.style.left = "0";
        setTimeout(e => {
            line1.style.transform = "translateY(8px) rotate(45deg)";
            line3.style.transform = "translateY(-8px) rotate(-45deg)";
        }, 400);
        navOpen = true;
    }else{
        //transform back to burger and slide nav out
        line1.style.backgroundColor = "var(--lightColor)";
        line1.style.transform = "translateY(8px) rotate(0deg)";
        line1.style.borderRadius = "0px";
        line2.style.backgroundColor = "var(--lightColor)";
        line3.style.backgroundColor = "var(--lightColor)";
        line3.style.transform = "translateY(-8px) rotate(0deg)";
        line3.style.borderRadius = "0px";

        navInner.style.left = "-100vw";
        setTimeout(e => {
            line1.style.transform = "translateY(0px) rotate(0deg)";
            line3.style.transform = "translateY(0px) rotate(0deg)";
        }, 400);
        navOpen = false;
    }
    
};

const gaddisHelpDate = document.querySelector("#gaddisHelpDate")
if(gaddisHelpDate){
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    gaddisHelpDate.innerHTML = "//" + month + "/" + day + "/" + year;
}