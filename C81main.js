canvas=document.getElementById("mycanvas");

ctx=canvas.getContext("2d");

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=1;
ctx.rect(90,130,430,200);
ctx.stroke();

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(300,200,40,0,2 * Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(400,200,40,0,2 * Math.PI);
ctx.stroke();

color="#ffb533";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(250,240,40,0,2 * Math.PI);
ctx.stroke();

color="Green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(350,240,40,0,2 * Math.PI);
ctx.stroke();

