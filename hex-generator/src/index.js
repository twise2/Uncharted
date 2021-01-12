import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import hexTiles from "./hex-tiles";

console.log(hexTiles);

ReactDOM.render(
  <div className="App">
    {hexTiles.reduce((accum, tile, index) => {
      const count = tile.count || 1;
      for (let i = 0; i < count; i++) {
        accum.push(
          <span className="hex" key={index + i}>
            <div className="hex-inner">{tile.name || ""}</div>
          </span>,
        );
      }
      return accum;
    }, [])}
  </div>,
  document.getElementById("root"),
);
