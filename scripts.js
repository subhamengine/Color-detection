const red = document.querySelector(".red");
const cyan= document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const centre = document.querySelector(".center");

// console.log(window.getComputedStyle(voilet).backgroundColor);

const getBGColor = (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

const magicColor = (element , color)=>{
    return element.addEventListener('mouseenter',()=>{
        centre.style.background = color;
    })
};

magicColor(red,getBGColor(red));
magicColor(cyan,getBGColor(cyan));
magicColor(orange,getBGColor(orange));
magicColor(pink,getBGColor(pink));
magicColor(violet,getBGColor(violet));

