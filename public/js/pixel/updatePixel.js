import numberPixel from "./numberPixel.js";

const drawPixel = ({
  ctx,
  rowIndex,
  colIndex,
  pixelData,
  pixelSize,
}) => {
  if (pixelData !== null) {
    ctx.fillStyle = numberPixel(pixelData);
    ctx.fillRect(
      colIndex * pixelSize,
      rowIndex * pixelSize,
      pixelSize,
      pixelSize
    );
  }
};

const updatePixel = (ctx, rowIndex, colIndex, pixelData, pixelSize) => {
  drawPixel({ ctx, rowIndex, colIndex, pixelData, pixelSize });

};

export default updatePixel;