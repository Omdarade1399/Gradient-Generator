let btn1 = document.getElementById('myButton');
let btn2 = document.getElementById('myButton2');
let copyDiv = document.querySelector('.copyCode');
let rgb1 = "#5c91e5";
let rgb2 = "#983fc6";


const hexValues = () => {
    let myHexValues = "0123456789abcdef";
    let colors = "#";
    for(let i = 0; i < 6 ; i++){
        colors = colors + myHexValues[Math.floor(Math.random() * 16)];
    }
    return colors;
}

const handleButton1 = () => {
    rgb1 = hexValues();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    btn1.innerText = `${rgb1}`;
    btn1.style.backgroundColor = `${rgb1}`;
}

const handleButton2 = () => {
    rgb2 = hexValues();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    btn2.innerText = `${rgb2}`;
    btn2.style.backgroundColor = `${rgb2}`;
}

btn1.addEventListener('click', handleButton1);
btn2.addEventListener('click', handleButton2);
copyDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(copyDiv.innerText);
    alert('Copied to Clipboard');
})