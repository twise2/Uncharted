import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import hexTiles from "./hex-tiles";

ReactDOM.render(
  <div className="App">
    {hexTiles.reduce((accum, tile, index) => {
      const count = tile.count || 1;
      for (let i = 0; i < count; i++) {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        accum.push(
          <span className="hex" key={`${index} + ${i}`}>
            <div className="hex-inner-wrapper">
              <div className="hex-inner-text">{/*tile.text || ""*/}</div>
              {/*This renders the planet*/}
              <div
                className="hex-planet"
                style={{ backgroundColor: randomColor /*tile.color*/ }}
              ></div>

              {Math.random() > 1 - 0.2
                ? [...Array(parseInt(Math.random() * (1 + 0.1)) + 1)].map(
                    (e, i) => {
                      const ringHeight = Math.random() + 0.5;
                      const ringWidth = 0.33 * Math.random();
                      const rotation = parseInt(Math.random() * 360);

                      return (
                        <div
                          className="hex-ring"
                          style={{
                            border: randomColor
                              ? "1px solid " + randomColor
                              : null,
                            height: ringHeight.toString() + "in",
                            width: ringWidth.toString() + "in",
                            transform: `rotate(${rotation.toString() + "deg"})`,
                          }}
                        ></div>
                      );
                    },
                  )
                : null}
            </div>
          </span>,
        );
      }
      return accum;
    }, [])}
  </div>,
  document.getElementById("root"),
);
