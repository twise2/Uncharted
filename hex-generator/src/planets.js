import React from "react";
import {
  sample,
  getFurthestAwayMaximum,
  namePlanet,
  getRandomColor,
  plusOrMinus,
} from "./utils.js";

const resources = () => {
  return (
    <div className="resource-bar">
      {[...Array(sample([4]))].map((e, i) => {
        const color =
          i === 1
            ? "paleturquoise"
            : i === 2
            ? "orangered"
            : i === 3
            ? "darkseagreen"
            : "gray";
        //max of 5 min of 0 with bias towards lower
        const max = 3;
        const min = 0;
        const numResource = Math.floor(
          Math.pow(Math.abs(Math.random() - Math.random()), 1.2) *
            (1 + max - min) +
            min,
        );
        return (
          <React.Fragment key={`resource_${i}`}>
            {i !== 0 && (
              <div
                className="divider"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  zIndex: "-30",
                  borderRadius: "50%",
                }}
              >
                {"|"}
              </div>
            )}
            <div
              className="resource"
              style={{
                color: color,
                fontWeight: "bold",
                zIndex: "-30",
                borderRadius: "50%",
                margin: "0px 6px",
              }}
            >
              {" "}
              {numResource}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const moon = (i, planetSize, randomColor) => {
  const oddsOfMoon = 0.7;
  if (Math.random() > oddsOfMoon) {
    return null;
  }

  const offsetX = getFurthestAwayMaximum(planetSize);
  const offsetY = getFurthestAwayMaximum(planetSize);

  const size = planetSize / (6 * Math.random() + 4);
  return (
    <div
      className="moon"
      key={`moon_${i}`}
      style={{
        backgroundColor: randomColor,
        zIndex: "-3000",
        borderRadius: "50%",
        width: `${size}in`,
        height: `${size}in`,
        transform: `translateX(${plusOrMinus(
          offsetX,
        )}in) translateY(${plusOrMinus(offsetY)}in)`,
        position: "absolute",
      }}
    ></div>
  );
};

const binaryPlanet = offset => {
  offset = plusOrMinus(offset);
  return (
    <>
      {individualPlanet(offset)} {individualPlanet(-offset)}
    </>
  );
};

export const planet = () => {
  const isBinaryPlanet = Math.random() > 0.95;
  const binaryPlanetOffset = Math.random() * 0.1 + 0.2;
  return (
    <div className="hex-inner-wrapper">
      <div className="hex-inner-text">{/*tile.text || ""*/}</div>
      {isBinaryPlanet ? binaryPlanet(binaryPlanetOffset) : individualPlanet()}
      {resources()}
      <div className="hex-inner-name-text">
        {namePlanet().toUpperCase() +
          (isBinaryPlanet ? " & " + namePlanet().toUpperCase() : "")}
      </div>
    </div>
  );
};

const individualPlanet = (offset = 0) => {
  const planetSize = 0.2 + Math.random() * 0.2;
  const randomColor = getRandomColor();
  const numRings = Math.random() > 0.75 ? (Math.random() > 0.9 ? 2 : 1) : 0;

  return (
    <>
      <div
        className="planet"
        style={{
          backgroundColor: randomColor,
          zIndex: "-100",
          borderRadius: "50%",
          width: `${planetSize}in`,
          height: `${planetSize}in`,
          position: "absolute",
          transform: `translateX(${offset}in) translateY(${-offset}in)`,
        }}
      ></div>

      {[...Array(numRings)].map((e, i) => {
        const ringHeight = getFurthestAwayMaximum(planetSize) * 2; //is diameter, not radius;
        const ringWidth = 0.5 * Math.random() * planetSize;
        const rotation = parseInt(Math.random() * 90 + 45);
        return (
          <div
            className="hex-ring"
            key={`hex-ring_${i}`}
            style={{
              border: randomColor ? "2px solid " + randomColor : null,
              height: ringHeight.toString() + "in",
              width: ringWidth.toString() + "in",
              transform: `translateX(${offset}in) translateY(${-offset}in) rotate(${
                rotation.toString() + "deg"
              })`,
              position: "absolute",
              zIndex: -100,
              margin: "auto",
              borderRadius: "50%",
            }}
          ></div>
        );
      })}

      {
        //give chances of moons on a planet
        [...Array(parseInt(Math.random() * 15))].map((e, i) => {
          return moon(i, planetSize, randomColor);
        })
      }
    </>
  );
};
