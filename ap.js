const canvas =  document.querySelector('#draw')
const inputColor = document.querySelector("#inputColor");
const grosor = document.querySelector("#NumeroGrosor");

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth-100;
canvas.height = window.innerHeight-100;
ctx.strokeStyle = '#000';
ctx.lineJoin = 'round';
ctx.lineCap = "round";

let isDrawing = false;
let lastX =0;
let lastY =0;
let hue;

function draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle = hue;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];   
}

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e) => {
    isDrawing=true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
inputColor.addEventListener('change',(e)=>{
    hue = e.target.value;
});
grosor.addEventListener('change',()=>{
    ctx.lineWidth = grosor.value;
    console.log(grosor.value)
}),
canvas.addEventListener('mouseup',() => isDrawing=false);
canvas.addEventListener('mouseout',() => isDrawing=false);

