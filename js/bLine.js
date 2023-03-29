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

const canvas = document.getElementById("Bresenham");

const bline = new bLine(canvas);
bline.line(50, 50, 250, 250);
bline.line(60, 50, 260, 250);
bline.line(120, 50, 260, 250);
bline.line(100, 50, 100, 250);
bline.line(200, 50, 250, 200);
bline.line(50, 220, 275, 220);
