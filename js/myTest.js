/* 
  Points in a canvas are centered on (0.5;0.5); to draw a clean 1px wide line, one has to draw at integer coordinates + (0.5, 0.5).

  Let's see how this works in practice.
*/

const canvas2 = document.getElementById("translate-None");
const ctx2 = canvas2.getContext("2d");
ctx2.fillText("Drawing with translate(0, 0)", 10, 20);
DrawExamples(ctx2);

const canvas3 = document.getElementById("translate-0.5");
const ctx3 = canvas3.getContext("2d");
ctx3.fillText("Drawing with translate(0.5, 0.5)", 10, 20);
ctx3.translate(0.5, 0.5);
DrawExamples(ctx3);

function DrawExamples(ctx) {
  // Filled Rectangle using rect
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "red";
  ctx.rect(135, 30, 50, 100);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Rectangle using rect w fill
  ctx.beginPath();
  ctx.fillStyle = "ivory";
  ctx.strokeStyle = "blue";
  ctx.rect(200, 30, 50, 100);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Rectangle using rect w/o fill
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.rect(245, 10, 50, 100);
  ctx.stroke();
  ctx.closePath();

  // Rectangle using strokeRect
  ctx.strokeRect(220, 50, 50, 100);

  // Rectangle using fillRect
  ctx.fillStyle = "green";
  ctx.fillRect(230, 120, 50, 100);

  // Vertical line using rect
  ctx.beginPath();
  ctx.fillStyle = "ivory";
  ctx.rect(200, 150, 0, 100);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Horizontal line using rect
  ctx.beginPath();
  ctx.fillStyle = "ivory";
  ctx.rect(150, 200, 100, 0);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Horizontal line using lineTo
  ctx.beginPath();
  ctx.lineWith = 1;
  ctx.moveTo(25, 225);
  ctx.lineTo(250, 225);
  ctx.stroke();
  ctx.closePath();

  // Open Triangles
  ctx.strokeStyle = "blue";

  // Vertical line using lineTo
  ctx.beginPath();
  ctx.lineWith = 1;
  ctx.moveTo(50, 50);
  ctx.lineTo(50, 250);
  ctx.stroke();
  ctx.closePath();

  // Diagonal line using lineTo
  ctx.beginPath();
  ctx.lineWith = 1;
  ctx.moveTo(50, 50);
  ctx.lineTo(250, 250);
  ctx.stroke();
  ctx.closePath();

  // Diagonal line using lineTo
  ctx.beginPath();
  ctx.lineWith = 1;
  ctx.moveTo(50, 50);
  ctx.lineTo(150, 250);
  ctx.stroke();
  ctx.closePath();
}
