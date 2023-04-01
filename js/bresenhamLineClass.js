// Bresenham's line algorithm
// https://stackoverflow.com/questions/25277023/complete-solution-for-drawing-1-pixel-line-on-html5-canvas?noredirect=1&lq=1
// by markE 13 Aug, 2014

class bLine {
  // By default, the browser creates canvas elements with a width of 300 pixels and a height of 150 pixels.
  #canvas;
  #ctx;
  #imgData;
  #data;
  #wrongCavas = TypeError("Canvas ERROR");
  #wrongCavasId = TypeError("Canvas Id not valid");

  constructor(canvasId) {
    if (typeof canvasId === "string") {
      this.#canvas = document.getElementById(canvasId);
    } else {
      console.log("Canvas Id not valid");
      throw this.#wrongCavasId;
    }

    if (this.#canvas.getContext) {
      this.#ctx = this.#canvas.getContext("2d");
      this.#ctx.font = "14px Consolas, 'Courier New', Courier, monospace";
      this.#ctx.fillText(`Bresenham's line algorithm`, 10, 20);

      this.#imgData = this.#ctx.getImageData(
        0,
        0,
        this.#canvas.width,
        this.#canvas.height
      );
      this.#data = this.#imgData.data;
    } else {
      console.log("Canvas ERROR");
      throw this.#wrongCavas;
    }
  }

  #setPixel(x, y) {
    const n = (y * this.#canvas.width + x) * 4;
    this.#data[n + 0] = 0;
    this.#data[n + 1] = 0;
    this.#data[n + 2] = 255;
    this.#data[n + 3] = 255;
  }

  // Refer to:
  // https://rosettacode.org/wiki/Bitmap/Bresenham's_line_algorithm#JavaScript

  line(x0, y0, x1, y1) {
    let dx = Math.abs(x1 - x0);
    let sx = x0 < x1 ? 1 : -1;
    let dy = Math.abs(y1 - y0);
    let sy = y0 < y1 ? 1 : -1;
    let err = (dx > dy ? dx : -dy) / 2;

    while (true) {
      this.#setPixel(x0, y0);
      if (x0 === x1 && y0 === y1) break;
      const e2 = err;
      if (e2 > -dx) {
        err -= dy;
        x0 += sx;
      }
      if (e2 < dy) {
        err += dx;
        y0 += sy;
      }
    }
    this.#ctx.putImageData(this.#imgData, 0, 0);
  }

  rectangle(x, y, width, height) {
    this.line(x, y, x + width, y);
    this.line(x + width, y, x + width, y + height);
    this.line(x + width, y + height, x, y + height);
    this.line(x, y + height, x, y);
  }

  // by copilot 1 Apr, 2023
  rectangleFilled(x, y, width, height) {
    for (let i = x; i <= x + width; i++) {
      this.line(i, y, i, y + height);
    }
  }
}

export { bLine };
