document.addEventListener("DOMContentLoaded",function() {
    const canvas=document.getElementById("sketchPad");
    const ctx=canvas.getContext("2d");
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.lineWidth=5;
    let drawing=false;
    const defaultBtn=document.getElementById("defaultBtn");
    const redBtn=document.getElementById("redBtn");
    const blueBtn=document.getElementById("blueBtn");
    const greenBtn=document.getElementById("greenBtn");
    const eraserBtn=document.getElementById("eraserBtn");
    const clearBtn=document.getElementById("clearBtn");
    const currentColor=document.getElementById("currentColor");
    function setColor(color,label) {
        ctx.strokeStyle=color;
        currentColor.textContent=label;
    }
    setColor("#000000","Black");
    canvas.addEventListener("mousedown",(e) => {
        drawing=true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });
    canvas.addEventListener("mousemove",(e) => {
        if (!drawing) return;
        if (e.offsetX < 0 ||e.offsetY < 0 || e.offsetX > canvas.width || e.offsetY > canvas.height) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    });
    canvas.addEventListener("mouseup",() => drawing=false);
    canvas.addEventListener("mouseout", () => drawing=false);
    defaultBtn.addEventListener("click", () => setColor("#000000","Black"));
    redBtn.addEventListener("click", () => setColor("#ff0000","Red"));
    blueBtn.addEventListener("click", () => setColor("#0000ff","Blue"));
    greenBtn.addEventListener("click", () => setColor("#008000","Green"));
    eraserBtn.addEventListener("click", () => setColor("#ffffff","White (Eraser)"));
    clearBtn.addEventListener("click", () => {
        ctx.fillStyle="#ffffff";
        ctx.fillRect(0,0,canvas.width, canvas.height);
        setColor("#000000","Black");
    });
});