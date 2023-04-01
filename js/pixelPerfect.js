/*
  Complete Solution for Drawing 1 Pixel Line on HTML5 Canvas
  ----------------------------------------------------------

  For me, only a combination of different 'pixel perfect' techniques helped to archive the results:

  1. Get and scale canvas with a pixel ratio:

    pixelRatio = window.devicePixelRatio/ctx.backingStorePixelRatio

  2. Scale the canvas on the resize (avoid canvas default stretch scaling).

  3. multiple the lineWidth with pixelRatio to find proper 'real' pixel line thickness:

    context.lineWidth = thickness * pixelRatio;

  4. Check whether the thickness of the line is odd or even. add half of the pixelRatio to the line position for the odd thickness values.

    x = x + pixelRatio/2;

    The odd line will be placed in the middle of the pixel. The line above is used to move it a little bit.

  5. use image-rendering: pixelated;

  https://stackoverflow.com/questions/25277023/complete-solution-for-drawing-1-pixel-line-on-html5-canvas?noredirect=1&lq=1
  -- Ievgen 11 jul, 2019
*/

const squares_pixelPerfect_canvas = document.getElementById(
  "squares_pixelPerfect"
);
const squares_pixelPerfect_ctx = squares_pixelPerfect_canvas.getContext("2d");

const lines_pixelPerfect_canvas = document.getElementById("lines_pixelPerfect");
const lines_pixelPerfect_ctx = lines_pixelPerfect_canvas.getContext("2d");

let pixelRatio = getPixelRatio(squares_pixelPerfect_ctx);
const initialWidth = squares_pixelPerfect_canvas.clientWidth * pixelRatio;
const initialHeight = squares_pixelPerfect_canvas.clientHeight * pixelRatio;

function getPixelRatio(ctx) {
  (dpr = window.devicePixelRatio || 1),
    (bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1);

  return dpr / bsr;
}

window.addEventListener(
  "resize",
  function (args) {
    rescale(squares_pixelPerfect_ctx);
    rescale(lines_pixelPerfect_ctx);
    redrawRectangles(squares_pixelPerfect_ctx);
    redrawLines(lines_pixelPerfect_ctx);
  },
  false
);

function rescale(ctx) {
  const width = initialWidth * pixelRatio;
  const height = initialHeight * pixelRatio;
  if (width != ctx.canvas.width) ctx.canvas.width = width;
  if (height != ctx.canvas.height) ctx.canvas.height = height;

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function pixelPerfectLine(ctx, x1, y1, x2, y2) {
  // ctx.save();
  ctx.beginPath();
  thickness = 1;
  // Multiple your stroke thickness  by a pixel ratio!
  ctx.lineWidth = thickness * pixelRatio;

  ctx.strokeStyle = "Blue";
  ctx.moveTo(getSharpPixel(thickness, x1), getSharpPixel(thickness, y1));
  ctx.lineTo(getSharpPixel(thickness, x2), getSharpPixel(thickness, y2));
  ctx.stroke();
  // ctx.restore();
}

function pixelPerfectRectangle(ctx, x, y, w, h, thickness, useDash) {
  // Pixel perfect rectange:
  ctx.beginPath();

  // Multiple your stroke thickness by a pixel ratio!
  ctx.lineWidth = thickness * pixelRatio;

  if (useDash) {
    ctx.setLineDash([4]);
  }

  // use sharp x,y and integer w,h!
  drawExampleRectangles(
    ctx,
    (x = getSharpPixel(thickness, x)),
    (y = getSharpPixel(thickness, y)),
    (width = Math.floor(w)),
    (height = Math.floor(h))
  );
}

function redrawLines(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = "14px Consolas, 'Courier New', Courier, monospace";
  ctx.fillStyle = "black";
  ctx.fillText(`Pixel perfect lines?`, 10, 20);

  pixelPerfectLine(ctx, 50, 30, 50, 130);
  pixelPerfectLine(ctx, 25, 30, 250, 130);
  pixelPerfectLine(ctx, 25, 30, 150, 130);
  pixelPerfectLine(ctx, 25, 100, 250, 100);
}

function redrawRectangles(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = "14px Consolas, 'Courier New', Courier, monospace";
  ctx.fillStyle = "black";
  ctx.fillText(`Pixel perfect rectangles?`, 10, 20);

  pixelPerfectRectangle(ctx, 10, 30, 30, 100, 1, false);
}

function getSharpPixel(thickness, pos) {
  if (thickness % 2 == 0) {
    return pos;
  }
  return pos + pixelRatio / 2;
}

rescale(squares_pixelPerfect_ctx);
rescale(lines_pixelPerfect_ctx);
redrawRectangles(squares_pixelPerfect_ctx);
redrawLines(lines_pixelPerfect_ctx);
