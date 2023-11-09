import numberPixel from "./numberPixel.js";

const drawPixel = ({
  ctx,
  pixelData,
  pixelSize,
  canvasWidth,
  canvasHeight,
}) => {
  const colMax = canvasWidth / pixelSize;
  const rowMax = canvasHeight / pixelSize;

  for (let rowIndex = 0; rowIndex < rowMax; rowIndex++) {
    for (let colIndex = 0; colIndex < colMax; colIndex++) {
      if (pixelData[rowIndex][colIndex] !== null) {
        ctx.fillStyle = numberPixel(pixelData[rowIndex][colIndex]);
        ctx.fillRect(
          colIndex * pixelSize,
          rowIndex * pixelSize,
          pixelSize,
          pixelSize
        );
      }
    }
  }
};

const firstDrawPixel = ({
  canvasEl,
  ctx,
  pixelData,
  pixelSize,
  canvasWidth,
  canvasHeight,
}) => {
  canvasEl.width = canvasWidth;
  canvasEl.height = canvasHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  drawPixel({
    ctx,
    pixelData,
    pixelSize,
    canvasWidth,
    canvasHeight,
  });
};

export default firstDrawPixel;
