import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import hexTiles from "./hex-tiles";
import { planet } from "./planets.js";

const blackHole = () => {
  const holeSize = 1.2;
  return (
    <div className="hex-inner-wrapper">
      <div className="hex-inner-text">{/*tile.text || ""*/}</div>
      <div
        className="black-hole"
        style={{
          backgroundColor: "#000000",
          boxShadow: `0 0 ${holeSize / 20}in ${holeSize / 20}in #484848	`,
          zIndex: "-100",
          borderRadius: "50%",
          width: `${holeSize}in`,
          height: `${holeSize}in`,
          position: "absolute",
        }}
      ></div>
    </div>
  );
};

const star = () => {
  const holeSize = 0.4;
  return (
    <div className="hex-inner-wrapper">
      <div className="hex-inner-text">{/*tile.text || ""*/}</div>
      <div
        className="star-border"
        style={{
          backgroundColor: null,
          borderRadius: "50%",
          width: `${holeSize}in`,
          height: `${holeSize}in`,
          boxShadow: `0 0 ${holeSize * 1.5}in ${holeSize * 1.5}in #F9D71C`,
        }}
      >
        <div
          className="star-center"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
            zIndex: "-50",
            width: `${holeSize}in`,
            height: `${holeSize}in`,
            boxShadow: `0 0 ${holeSize * 1.5}in ${holeSize * 1.5}in #FCC484`,
          }}
        ></div>
      </div>
    </div>
  );
};

const selector = tile => {
  switch (tile.type) {
    case "star":
      return star();
    case "planet":
      return planet();
    case "blackhole":
      return blackHole();
    default:
      return null;
  }
};

ReactDOM.render(
  <div className="App">
    {hexTiles.reduce((accum, tile, index) => {
      const count = tile.count || 1;
      for (let i = 0; i < count; i++) {
        accum.push(
          <span className="hex" key={`hex_${index}_${i}`}>
            {selector(tile)}
          </span>,
        );
      }
      return accum;
    }, [])}
  </div>,
  document.getElementById("root"),
);
