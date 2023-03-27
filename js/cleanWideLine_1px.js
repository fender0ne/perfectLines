// https://stackoverflow.com/questions/24669578/canvas-line-behaviour-when-0-linewidth-1
// First thing to remind is that points in a canvas are centered on (0.5;0.5) , so ,to draw a clean 1px wide line, one has to draw at integer coordinates + (0.5, 0.5).

function drawTriangle(ctx, x, y, thk, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillText(
    `line drawn at (${x}, ${y}) with lineWidth ${thk} and alpha ${alpha}`,
    0,
    0
  );
  ctx.moveTo(50, 100);
  ctx.lineTo(200, 100);
  ctx.lineTo(50, 20);
  ctx.closePath();
  ctx.lineWidth = thk;
  ctx.globalAlpha = alpha;
  ctx.stroke();
  ctx.restore();
}

var ctx = document.getElementById("triangle1").getContext("2d");
drawTriangle(ctx, 10, 20, 1.0, 1.0);
drawTriangle(ctx, 10.5, 140 + 20.5, 1.0, 1.0);

var ctx = document.getElementById("triangle2").getContext("2d");
drawTriangle(ctx, 10.5, 20.5, 0.25, 1.0);
drawTriangle(ctx, 10.5, 140 + 20.5, 1.0, 0.5);

var ctx = document.getElementById("triangle3").getContext("2d");
drawTriangle(ctx, 10, 20, 2.0, 1.0);
drawTriangle(ctx, 10.5, 140 + 20.5, 2.0, 1.0);
