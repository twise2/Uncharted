import {
  sample,
  getFurthestAwayMaximum,
  namePlanet,
  getRandomColor,
} from "./utils.js";

const resources = size => {
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
        const max = 5;
        const min = 0;
        const numResource = Math.floor(
          Math.pow(Math.abs(Math.random() - Math.random()), 1.2) *
            (1 + max - min) +
            min,
        );
        return (
          <>
            {i !== 0 && (
              <div
                className="divider"
                key={`resource_${i}`}
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
              key={`resource_${i}`}
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
          </>
        );
      })}
    </div>
  );
};

const resourcesOffset = size => {
  let offset = size * 2;
  return [...Array(sample([4]))].map((e, i) => {
    //convert negatives
    let offsetX = [0, 1].includes(i) ? offset : -1 * offset;
    let offsetY = [1, 2].includes(i) ? offset : -1 * offset;
    console.log(
      "i",
      i,
      typeof i,
      offsetX,
      offsetY,
      `translateX(${offsetX}in) translateY(${offsetY}in)`,
    );
    return (
      <div
        className="resource"
        key={`resource_${i}`}
        style={{
          backgroundColor: "#ffffff",
          zIndex: "-30",
          borderRadius: "50%",
          width: `${size}in`,
          height: `${size}in`,
          transform: `translateX(${offsetX}in) translateY(${offsetY}in)`,
          position: "absolute",
        }}
      ></div>
    );
  });
};

const moon = (i, planetSize, randomColor) => {
  let offsetX = getFurthestAwayMaximum(planetSize);
  if (Math.random() > 0.5) {
    offsetX = -offsetX;
  }
  let offsetY = getFurthestAwayMaximum(planetSize);
  if (Math.random() > 0.5) {
    offsetY = -offsetY;
  }

  const size = planetSize / (6 * Math.random() + 4);
  return (
    <div
      className="moon"
      key={`moon_${i}`}
      style={{
        backgroundColor: randomColor,
        zIndex: "-30",
        borderRadius: "50%",
        width: `${size}in`,
        height: `${size}in`,
        transform: `translateX(${offsetX}in) translateY(${offsetY}in)`,
        position: "absolute",
      }}
    ></div>
  );
};

export const planet = () => {
  const randomColor = getRandomColor();
  const oddsOfRings = 0.2;
  const planetSize = 0.2;
  return (
    <div className="hex-inner-wrapper">
      <div className="hex-inner-text">{/*tile.text || ""*/}</div>
      <div
        className="planet"
        style={{
          backgroundColor: randomColor,
          zIndex: "-100",
          borderRadius: "50%",
          width: `${planetSize}in`,
          height: `${planetSize}in`,
          position: "absolute",
        }}
      ></div>

      {
        //give a chance of a ring on a planet
        Math.random() > 1 - oddsOfRings
          ? [...Array(parseInt(Math.random() * (1 + 0.1)) + 1)].map((e, i) => {
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
                    transform: `rotate(${rotation.toString() + "deg"})`,
                    position: "absolute",
                    zIndex: -100,
                    margin: "auto",
                    borderRadius: "50%",
                  }}
                ></div>
              );
            })
          : null
      }

      {
        //give chances of moons on a planet
        [...Array(parseInt(Math.random() * 15))].map((e, i) => {
          return moon(i, planetSize, randomColor);
        })
      }

      {resources(planetSize)}

      <div className="hex-inner-name-text">{namePlanet().toUpperCase()}</div>
    </div>
  );
};
