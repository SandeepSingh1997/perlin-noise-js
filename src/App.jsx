import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const canvas = document.querySelector("#my_canvas");
    const width = canvas.getAttribute("width");
    const height = canvas.getAttribute("height");
    const ctx = canvas.getContext("2d");
    const pixelSize = 2;
    for (let x = 0; x < width; x += pixelSize) {
      for (let y = 0; y < height; y += pixelSize) {
        ctx.fillStyle = `#${randomNumber()}`;
        drawPixel(ctx, x, y, pixelSize);
      }
    }
    // ctx.clear();
  }, []);

  function randomNumber() {
    return Math.floor(Math.random() * (255 * 255 * 255 - 1)).toString(16);
  }

  function drawPixel(ctx, posX, posY, size) {
    ctx.fillRect(posX, posY, posX + size, posY + size);
    ctx.fill();
  }

  return (
    <>
      <canvas
        id="my_canvas"
        width="400"
        height="400"
        style={{ backgroundColor: "red" }}
      ></canvas>
    </>
  );
}

export default App;
