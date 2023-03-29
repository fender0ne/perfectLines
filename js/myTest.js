/* 
  Points in a canvas are centered on (0.5;0.5); to draw a clean 1px wide line, one has to draw at integer coordinates + (0.5, 0.5).

  Let's see how this works in practice.
*/

const canvas2 = document.getElementById("translate-None");
const ctx2 = canvas2.getContext("2d");
ctx2.font = "14px Consolas, 'Courier New', Courier, monospace";
ctx2.fillStyle = "black";
ctx2.fillText("translate(0, 0)", 10, 20);
DrawExamples(ctx2);

const canvas3 = document.getElementById("translate-0.5");
const ctx3 = canvas3.getContext("2d");
ctx3.font = "14px Consolas, 'Courier New', Courier, monospace";
ctx3.fillStyle = "black";
ctx3.fillText("translate(0.5, 0.5)", 10, 20);
ctx3.translate(0.5, 0.5);
DrawExamples(ctx3);

function DrawExamples(ctx) {
  const x = 100;
  const y = 30;
  const gap = 10;
  const width = 30;
  const height = 100;

  function calculateNewX(i) {
    return x + (width + gap) * i;
  }

  // Rectangles ----------------------------------------------------------------------------------------------
  // 0: Filled Rectangle using rect
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "red";
  ctx.rect(x, y, width, height);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // 1: Rectangle using fillRect: it does not draw the outline
  // Note: better w translate(0,0) than w translate(0.5, 0.5)
  ctx.fillStyle = "green";
  ctx.fillRect(calculateNewX(1), y, width, height);

  // 2: Rectangle using rect w fill color eqyual to the background color
  // Note: almost indistinguishable between translate(0,0) and translate(0.5, 0.5),
  // but the border (outline) looks slightly better w translate(0.5, 0.5)
  ctx.beginPath();
  // ctx.fillStyle = "ivory";
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

  // Lines ---------------------------------------------------------------------------------------------------
  // Note: all 1px lines are better w translate(0.5,0.5) than w translate(0, 0)

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

  // Horizontal line using lineTo
  ctx.beginPath();
  ctx.lineWith = 1;
  ctx.moveTo(25, 225);
  ctx.lineTo(250, 225);
  ctx.stroke();
  ctx.closePath();

  // Vertical line using rect: no really a line!
  ctx.beginPath();
  ctx.fillStyle = "ivory";
  ctx.rect(75, 140, 1, 100);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Vertical line using rect
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.fillStyle = "yellow";
  ctx.rect(260, 150, 0, 100);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Horizontal line using rect
  ctx.beginPath();
  ctx.fillStyle = "ivory";
  ctx.rect(190, 200, 100, 0);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}
