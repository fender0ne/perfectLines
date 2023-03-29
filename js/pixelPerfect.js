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

function getPixelRatio(context) {
  (dpr = window.devicePixelRatio || 1),
    (bsr =
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1);

  return dpr / bsr;
}

var canvas = document.getElementById("pixelPerfect-canvas");
var context = canvas.getContext("2d");

var pixelRatio = getPixelRatio(context);
var initialWidth = canvas.clientWidth * pixelRatio;
var initialHeight = canvas.clientHeight * pixelRatio;

window.addEventListener(
  "resize",
  function (args) {
    rescale();
    redraw();
  },
  false
);

function rescale() {
  var width = initialWidth * pixelRatio;
  var height = initialHeight * pixelRatio;
  if (width != context.canvas.width) context.canvas.width = width;
  if (height != context.canvas.height) context.canvas.height = height;

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function pixelPerfectLine(x1, y1, x2, y2) {
  context.save();
  context.beginPath();
  thickness = 1;
  // Multiple your stroke thickness  by a pixel ratio!
  context.lineWidth = thickness * pixelRatio;

  context.strokeStyle = "Blue";
  context.moveTo(getSharpPixel(thickness, x1), getSharpPixel(thickness, y1));
  context.lineTo(getSharpPixel(thickness, x2), getSharpPixel(thickness, y2));
  context.stroke();
  context.restore();
}

function pixelPerfectRectangle(x, y, w, h, thickness, useDash) {
  context.save();
  // Pixel perfect rectange:
  context.beginPath();

  // Multiple your stroke thickness by a pixel ratio!
  context.lineWidth = thickness * pixelRatio;
  context.strokeStyle = "Red";
  if (useDash) {
    context.setLineDash([4]);
  }
  // use sharp x,y and integer w,h!
  context.strokeRect(
    getSharpPixel(thickness, x),
    getSharpPixel(thickness, y),
    Math.floor(w),
    Math.floor(h)
  );

  context.fillStyle = "blue";
  context.fillRect(
    getSharpPixel(thickness, x),
    getSharpPixel(thickness, y),
    Math.floor(w),
    Math.floor(h)
  );

  context.fillStyle = "green";
  context.fillRect(
    getSharpPixel(thickness, x + Math.floor(w) + 10),
    getSharpPixel(thickness, y),
    Math.floor(w),
    Math.floor(h)
  );

  context.restore();
}

function redraw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "14px Consolas, 'Courier New', Courier, monospace";
  context.fillStyle = "black";
  context.fillText(`Pixel perfect?`, 10, 20);

  pixelPerfectLine(260, 150, 260, 250);
  pixelPerfectLine(190, 200, 290, 200);
  pixelPerfectLine(50, 50, 50, 250);
  pixelPerfectLine(50, 50, 250, 250);
  pixelPerfectLine(50, 50, 150, 250);
  pixelPerfectLine(25, 225, 250, 225);

  pixelPerfectRectangle(100, 30, 30, 100, 1, false);
  // pixelPerfectRectangle(41, 42, 150.3, 43.2, 1, true);
  // pixelPerfectRectangle(102, 100, 150.3, 193.2, 2, true);
}

function getSharpPixel(thickness, pos) {
  if (thickness % 2 == 0) {
    return pos;
  }
  return pos + pixelRatio / 2;
}

rescale();
redraw();
