import { useEffect, useState } from "react";
import { createNoise2D } from "simplex-noise";
import "./App.css";

function App() {
  const noise = createNoise2D();
  useEffect(() => {
    const canvas = document.querySelector("#my_canvas");
    const width = canvas.getAttribute("width");
    const height = canvas.getAttribute("height");
    const ctx = canvas.getContext("2d");
    const pixelSize = 2;

    for (let x = 0; x < width; x += pixelSize) {
      for (let y = 0; y < height; y += pixelSize) {
        const color = `#${perlinBasedHexValue(x, y)}`;
        drawPixel(ctx, x, y, pixelSize, color);
      }
    }

    // ctx.clear();
    // for (let x = 0; x < width; x += pixelSize) {
    //   for (let y = 0; y < height; y += pixelSize) {
    //     const color = `#${randomNumber()}`;
    //     drawPixel(ctx, x, y, pixelSize, color);
    //   }
    // }
  }, []);

  function perlinBasedHexValue(x, y) {
    return Math.floor(((noise(x, y) + 1) / 2) * 16581374).toString(16);
  }

  function randomNumber() {
    return Math.floor(Math.random() * 16581374).toString(16);
  }

  function drawPixel(ctx, posX, posY, size, color) {
    ctx.fillStyle = color;
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
