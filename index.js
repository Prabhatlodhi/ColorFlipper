const rgbBtn = document.querySelector('#rgbBtn');
const rgbH = document.querySelector('#rgbH');
const hexBtn = document.querySelector('#hexBtn');
const hexH = document.querySelector('#hexH');

rgbBtn.addEventListener('click', ()=>{
    const newColor = RGBColor();
    document.querySelector('#rgb').style.backgroundColor = newColor;
    rgbH.innerText = newColor;
})

hexBtn.addEventListener('click', ()=>{
    const newColor = HexColor();
    document.querySelector('#hex').style.backgroundColor = newColor;
    hexH.innerText = newColor;

})

const HexColor = () => {
    const hex = "0123456789ABCDEF";
    const h1 = Math.floor(Math.random()*16);
    const h2 = Math.floor(Math.random()*16);
    const h3 = Math.floor(Math.random()*16);
    const h4 = Math.floor(Math.random()*16);
    const h5 = Math.floor(Math.random()*16);
    const h6 = Math.floor(Math.random()*16);
    return `#${hex[h1]}${hex[h2]}${hex[h3]}${hex[h4]}${hex[h5]}${hex[h6]}`
}

const RGBColor = () =>{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}