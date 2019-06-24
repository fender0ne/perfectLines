/*
The "wider" line you refer to results from anti-aliasing that's automatically done by the browser.

Anti-aliasing is used to display a visually less jagged line.

Short of drawing pixel-by-pixel, there's currently no way of disabling anti-aliasing drawn by the browser.

You can use Bresenham's line algorithm to draw your line by setting individual pixels. Of course, setting individual pixels results in lesser performance.
-- https://stackoverflow.com/questions/25277023/complete-solution-for-drawing-1-pixel-line-on-html5-canvas?noredirect=1&lq=1
*/

var canvas = document.getElementById("cv");

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");

  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imgData.data;

  bline(50, 50, 250, 250);
  ctx.putImageData(imgData, 0, 0);

  // const renderIt = (function() {
  //   let i = 0
  //   return function() {
  //   ctx.putImageData(imgData, 0, ++i);
  //   }
  // })()

  // setInterval(renderIt,1000);




  function setPixel(x, y) {
      var n = (y * canvas.width + x) * 4;
      data[n] = 0;
      data[n + 1] = 0;
      data[n + 2] = 255;
      data[n + 3] = 255;
  }

  // Refer to: http://rosettacode.org/wiki/Bitmap/Bresenham's_line_algorithm#JavaScript
  function bline(x0, y0, x1, y1) {
      var dx = Math.abs(x1 - x0),
          sx = x0 < x1 ? 1 : -1;
      var dy = Math.abs(y1 - y0),
          sy = y0 < y1 ? 1 : -1;
      var err = (dx > dy ? dx : -dy) / 2;
      while (true) {
          setPixel(x0, y0);
          if (x0 === x1 && y0 === y1) break;
          var e2 = err;
          if (e2 > -dx) {
              err -= dy;
              x0 += sx;
          }
          if (e2 < dy) {
              err += dx;
              y0 += sy;
          }
      }
  }

  var canvas2 = document.getElementById("cv2");
  var ctx2 = canvas2.getContext("2d");

  // ctx2.translate(0.5, 0.5);

  ctx2.beginPath();
  ctx2.fillStyle = 'ivory';
  ctx2.strokeStyle = 'blue';
  ctx2.rect(200, 30, 50, 100);
  ctx2.stroke();
  ctx2.fill();
  ctx2.closePath();

  ctx2.beginPath();
  ctx2.fillStyle = 'ivory';
  // ctx2.strokeStyle = 'black';
  ctx2.rect(200, 150, 0, 100);
  ctx2.stroke();
  ctx2.fill();
  ctx2.closePath();

  ctx2.beginPath();
  ctx2.lineWith = 1;
  ctx2.moveTo(50,50)
  ctx2.lineTo(50,250)
  ctx2.stroke()
  ctx2.closePath();

  ctx2.beginPath();
  ctx2.lineWith = 1;
  ctx2.moveTo(50,50)
  ctx2.lineTo(250,250)
  ctx2.stroke()
  ctx2.closePath();

  ctx2.beginPath();
  ctx2.lineWith = 1;
  ctx2.moveTo(50,50)
  ctx2.lineTo(150,250)
  ctx2.stroke()
  ctx2.closePath();

  var canvas3 = document.getElementById("cv3");
  var ctx2 = canvas3.getContext("2d");

  ctx2.translate(0.5, 0.5);

  ctx2.beginPath();
  ctx2.fillStyle = 'ivory';
  ctx2.strokeStyle = 'blue';
  ctx2.rect(200, 30, 50, 100);
  ctx2.stroke();
  ctx2.fill();
  ctx2.closePath();

  ctx2.beginPath();
  ctx2.fillStyle = 'ivory';
  // ctx2.strokeStyle = 'black';
  ctx2.rect(200, 150, 0, 100);
  ctx2.stroke();
  ctx2.fill();
  ctx2.closePath();

  ctx2.beginPath();
  ctx2.lineWith = 1;
  ctx2.moveTo(50,50)
  ctx2.lineTo(50,250)
  ctx2.stroke()
  ctx2.closePath();

  ctx2.beginPath();
  ctx2.lineWith = 1;
  ctx2.moveTo(50,50)
  ctx2.lineTo(250,250)
  ctx2.stroke()
  ctx2.closePath();

  ctx2.beginPath();
  ctx2.lineWith = 1;
  ctx2.moveTo(50,50)
  ctx2.lineTo(150,250)
  ctx2.stroke()
  ctx2.closePath();

  for(var i=0; i>10; i++) {
    ctx2.translate(0.5, 0.5+i);
  }

  setInterval(renderIt,1);

  // https://stackoverflow.com/questions/24669578/canvas-line-behaviour-when-0-linewidth-1
  var ctx = document.getElementById('cv4').getContext('2d');

  function drawLine(x, y, thk, alpha) {
    ctx.save();
    ctx.translate(x,y);
    ctx.fillText('line drawn at ' + x  + ' ' + y + '   lineWidth ' + thk + '   alpha ' + alpha  , 0,0);
    ctx.moveTo(50,100);
    ctx.lineTo(200, 100);
    ctx.lineTo(50, 20);
    ctx.closePath();
    ctx.lineWidth=thk;
    ctx.globalAlpha  = alpha;
    ctx.stroke();
    ctx.restore();

  }

  drawLine(10,20,1.0, 1.0);

  drawLine(10.5,140 + 20.5,1.0, 1.0 );

  drawLine(10.5, 2*140 + 20.5, 1.0, 0.5 );
  // drawLine(10.5, 2*140 + 20.5, 0.5, 1.0 );

  // drawLine(10.5, 3*140 + 20.5, 1.0, 0.8  );

  // drawLine(10.5, 4*140 + 20.5, 0.25, 1.0 );

  var ctx = document.getElementById('cv5').getContext('2d');
  drawLine(10.5, 20.5, 0.25, 1.0 );

  drawLine(10.5, 140 + 20.5, 1.0, 0.5 );

  var ctx = document.getElementById('cv6').getContext('2d');
  drawLine(10,20,1.0, 1.0);

  drawLine(10.5, 140 + 20.5, 1.0, 0.5 );

  var ctx = document.getElementById('cv7').getContext('2d');
  drawLine(10,20,2.0, 1.0);

  drawLine(10.5, 140 + 20.5, 2.0, 1.0 );

} else {
  // Canvas not supported
}
