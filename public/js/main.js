import firstDrawPixel from "./pixel/firstDrawPixel.js";
import updatePixel from "./pixel/updatePixel.js";
import onClickColor from "./events/onClickColor.js";
import onClickPixel from "./events/onClickPixel.js";
import drawPixel from "./pixel/drawPixel.js";



const canvasEl = document.querySelector("canvas");
const ctx = canvasEl.getContext("2d");

let selectedColor = null;
let pixelSizeFront = null;

const socket = io();

socket.on(
  "join-pixel-data",
  ({ pixelData, pixelSize, canvasWidth, canvasHeight }) => {
    pixelSizeFront = pixelSize;
    firstDrawPixel({
      canvasEl,
      ctx,
      pixelData,
      pixelSize,
      canvasWidth,
      canvasHeight,
    });
    onClickPixel({
      canvasEl,
      pixelSize,
      callback: ({ rowIndex, colIndex }) => {
        socket.emit("update-pixel-data", {
          color: selectedColor,
          rowIndex,
          colIndex,
        });
      },
    });
  }
);

/*
socket.on("update-pixel-data", (pixelData) => {
  console.table("pixelData", pixelData);
  drawPixel({
    ctx,
    pixelData,
    pixelSize: pixelSizeFront,
    canvasWidth: canvasEl.width,
    canvasHeight: canvasEl.height,
  });
});
*/

socket.on("cannot-update", () => {
  alert(
    "Calme t'es nerd bg"
  );
});

socket.on("new-updates", (updates) => {
  for (const update of updates) {
    console.log(update)
    const [rowIndex, colIndex, pixelData] = update;
    console.log(rowIndex)
    updatePixel(ctx, rowIndex, colIndex, pixelData, pixelSizeFront); // pixelSizeFront = pixelSize
  }
})

socket.on("error-when-update", () => {
  alert("error while submiting pixel place, probably because your are try to add a color that doesn't exit or add a pixel on a pixel plot that doesn't exist!")
})

onClickColor({
  callback: (color) => {
    selectedColor = color;
  },
});
