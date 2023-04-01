/*
  Complete Solution for Drawing 1 Pixel Line on HTML5 Canvas
  ----------------------------------------------------------

  The "wider" line you refer to results from anti-aliasing that's automatically done by the browser.

  Anti-aliasing is used to display a visually less jagged line.

  Short of drawing pixel-by-pixel, there's currently no way of disabling anti-aliasing drawn by the browser.

  You can use Bresenham's line algorithm to draw your line by setting individual pixels. Of course, setting individual pixels results in lesser performance.
  -- https://stackoverflow.com/questions/25277023/complete-solution-for-drawing-1-pixel-line-on-html5-canvas?noredirect=1&lq=1
  -- markE 13 Aug, 2014
*/

import { bLine } from "./bresenhamLineClass.js";

const bline = new bLine("lines_Bresenham");
bline.line(50, 30, 50, 130);
bline.line(25, 30, 250, 130);
bline.line(25, 30, 150, 130);
bline.line(25, 100, 250, 100);

const bRectangle = new bLine("squares_Bresenham");
bRectangle.rectangle(10, 30, 30, 100);
bRectangle.rectangle(50, 30, 30, 100);
bRectangle.rectangle(90, 30, 30, 100);
bRectangle.rectangle(130, 30, 30, 100);
bRectangle.rectangle(170, 30, 30, 100);

bRectangle.rectangle(210, 100, 80, 0);
bRectangle.rectangle(270, 30, 0, 100);

bRectangle.rectangleFilled(130, 30, 30, 100);
