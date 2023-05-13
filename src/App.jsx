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
        const greyscale = perlinBasedGreyScale(x / 200, y / 200);
        const color = `#${greyscale + greyscale + greyscale}`;
        drawPixel(ctx, x, y, pixelSize, color);
      }
    }

    // ctx.clear();
    // for (let x = 0; x < width; x += pixelSize) {
    //   for (let y = 0; y < height; y += pixelSize) {
    //     const color = `#${randomHexNumber()}`;
    //     drawPixel(ctx, x, y, pixelSize, color);
    //   }
    // }
  }, []);

  function perlinBasedHexNumber(x, y) {
    return Math.floor(((noise(x, y) + 1) / 2) * 16581374).toString(16);
  }

  function randomHexNumber() {
    return Math.floor(Math.random() * 16581374).toString(16);
  }

  function perlinBasedGreyScale(x, y) {
    return Math.floor(((noise(x, y) + 1) / 2) * 255).toString(16);
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
