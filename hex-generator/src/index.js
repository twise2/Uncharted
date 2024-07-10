import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import hexTiles from "./hex-tiles";
import { planet } from "./planets";
import { star, blackHole } from "./otherHexTileItems";
import { colors, tokens } from "./units";
import { ship } from "./tokens";

const hexSelector = tile => {
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

const playerToken = (tile, color) => {
  switch (tile.type) {
    case "ship":
      return ship(color);
    default:
      return null;
  }
};

ReactDOM.render(
  <div key="app" className="App">
    {
      //build out each hex tile from the hexTiles file
      hexTiles.reduce((accum, tile, index) => {
        const count = tile.count || 1;
        for (let i = 0; i < count; i++) {
          accum.push(
            <div className="hex" key={`hex_${index}_${i}`}>
              {hexSelector(tile)}
            </div>,
          );
        }
        return accum;
      }, [])
    }
    {tokens.reduce((accum, tile, index) => {
      const count = tile.count || 1;
      colors.forEach(color => {
        for (let i = 0; i < count; i++) {
          accum.push(
            <div className="token" key={`token_${color}_${index}_${i}`}>
              {playerToken(tile, color)}
            </div>,
          );
        }
      });
      return accum;
    }, [])}
    {
      //build out each card (civilization/technology tier, superweapon)
      null
    }
    {
      //build out units for each team (N colors, ships, space-stations, factories, warp cores, superweapon tokens)
      null
    }
  </div>,
  document.getElementById("root"),
);
