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
          <span className="hex" key={`${index} + ${i}`}>
            <div className="hex-inner-wrapper">
              <div className="hex-inner-text">{tile.text || ""}</div>
              <div
                className="hex-center"
                style={{ backgroundColor: tile.color }}
              ></div>

              {
                //Create a ring at random at about the clip we see in our solr system.
                tile.color && Math.random() > 0.9
                  ? [...Array(parseInt(Math.random() * 1.1) + 1)].map(
                      (e, i) => {
                        const ringHeight = Math.random() * 0.5 + 0.5;
                        const ringWidth = ringHeight * Math.random() * 2;

                        const rotation = parseInt(Math.random() * 360);

                        console.log(ringHeight, ringWidth, rotation);

                        return (
                          <div
                            className="hex-ring"
                            style={{
                              borderColor: tile.color,
                              height: ringHeight.toString() + "in",
                              width: ringWidth.toString() + "in",
                              transform: `rotate(${
                                rotation.toString() + "deg"
                              })`,
                            }}
                          ></div>
                        );
                      },
                    )
                  : null
              }
            </div>
          </span>,
        );
      }
      return accum;
    }, [])}
  </div>,
  document.getElementById("root"),
);
