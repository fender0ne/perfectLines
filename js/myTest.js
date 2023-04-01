/* 
  Points in a canvas are centered on (0.5;0.5); to draw a clean 1px wide line, one has to draw at integer coordinates + (0.5, 0.5).

  Let's see how this works in practice.
*/

const canvas2_0 = document.getElementById("squares_translate-None");
const ctx2_0 = canvas2_0.getContext("2d");
ctx2_0.lineWidth = 1;
ctx2_0.font = "14px Consolas, 'Courier New', Courier, monospace";
ctx2_0.fillStyle = "black";
ctx2_0.fillText("translate(0, 0)", 10, 20);
drawExampleRectangles(ctx2_0);

const canvas2_1 = document.getElementById("lines_translate-None");
const ctx2_1 = canvas2_1.getContext("2d");
ctx2_1.lineWidth = 1;
ctx2_1.font = "14px Consolas, 'Courier New', Courier, monospace";
ctx2_1.fillStyle = "black";
ctx2_1.fillText("translate(0, 0)", 10, 20);
drawExampleLines(ctx2_1);

let canvas3_0 = document.getElementById("squares_translate-0.5");
let ctx3_0 = canvas3_0.getContext("2d");
ctx3_0.font = "14px Consolas, 'Courier New', Courier, monospace";
ctx3_0.lineWidth = 1;
ctx3_0.fillStyle = "black";
ctx3_0.fillText("translate(0.5, 0.5)", 10, 20);
ctx3_0.translate(0.5, 0.5);
drawExampleRectangles(ctx3_0);

let canvas3_1 = document.getElementById("lines_translate-0.5");
let ctx3_1 = canvas3_1.getContext("2d");
ctx3_1.font = "14px Consolas, 'Courier New', Courier, monospace";
ctx3_1.lineWidth = 1;
ctx3_1.fillStyle = "black";
ctx3_1.fillText("translate(0.5, 0.5)", 10, 20);
ctx3_1.translate(0.5, 0.5);
drawExampleLines(ctx3_1);

function drawExampleRectangles(ctx, x = 10, y = 30, width = 30, height = 100) {
  const gap = 10;

  function calculateNewX(i) {
    return x + (width + gap) * i;
  }

  ctx.save();

  // 0: Filled Rectangle using rect
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "red";
  ctx.rect(x, y, width, height);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // 1: Rectangle using fillRect: it does not draw the outline
  // Note: better w translate(0,0) than w translate(0.5, 0.5)
  ctx.fillStyle = "green";
  ctx.fillRect(calculateNewX(1), y, width, height);

  // 2: Rectangle using rect w fill color equal to the background color
  // Note: almost indistinguishable between translate(0,0) and translate(0.5, 0.5),
  // but the border (outline) looks slightly better w translate(0.5, 0.5)
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "blue";
  ctx.rect(calculateNewX(2), y, width, height);
  ctx.stroke();
  ctx.fill(); // !important
  ctx.closePath();

  // 3: Rectangle using rect w/o fill
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.rect(calculateNewX(3), y, width, height);
  ctx.stroke();
  ctx.closePath();

  // 4: Rectangle using strokeRect (outlined rectangle)
  // Note: better w translate(0.5,0.5) than w translate(0, 0)
  ctx.strokeRect(calculateNewX(4), y, width, height);

  // Using rectangles of width 0 to draw lines

  // Vertical line using rect
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.fillStyle = "yellow";
  ctx.rect(calculateNewX(5) + 60, y, 0, 100);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Horizontal line using rect
  ctx.beginPath();
  ctx.fillStyle = "ivory";
  ctx.rect(calculateNewX(5), 100, 80, 0);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.restore();
}

function drawExampleLines(ctx) {
  const x = 100;
  const y = 30;
  const gap = 10;
  const width = 30;
  const height = 100;

  ctx.lineWith = 1;
  ctx.strokeStyle = "blue";

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  }

  // Lines ---------------------------------------------------------------------------------------------------
  // Note: all 1px lines are better w translate(0.5,0.5) than w translate(0, 0)

  // Vertical line using lineTo
  drawLine(50, 30, 50, 130);

  // Diagonal lines using lineTo
  drawLine(25, 30, 250, 130);
  drawLine(25, 30, 150, 130);

  // Horizontal line using lineTo
  drawLine(25, 100, 250, 100);
}
