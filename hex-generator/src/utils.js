export const getFurthestAwayMaximum = objectSize => {
  return Math.random() * 2 * objectSize + objectSize;
};

export function shuffle(array) {
  var copy = [],
    n = array.length,
    i;

  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}

export function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function namePlanet() {
  let vowels = {
    "1": [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    "2": ["a", "e", "o", "u"],
    "3": [
      "br",
      "cr",
      "dr",
      "fr",
      "gr",
      "pr",
      "str",
      "tr",
      "bl",
      "cl",
      "fl",
      "gl",
      "pl",
      "sl",
      "sc",
      "sk",
      "sm",
      "sn",
      "sp",
      "st",
      "sw",
      "ch",
      "sh",
      "th",
      "wh",
    ],
    "4": [
      "ae",
      "ai",
      "ao",
      "au",
      "a",
      "ay",
      "ea",
      "ei",
      "eo",
      "eu",
      "e",
      "ey",
      "ua",
      "ue",
      "ui",
      "uo",
      "u",
      "uy",
      "ia",
      "ie",
      "iu",
      "io",
      "iy",
      "oa",
      "oe",
      "ou",
      "oi",
      "o",
      "oy",
    ],
    "5": [
      "turn",
      "ter",
      "nus",
      "rus",
      "tania",
      "hiri",
      "hines",
      "gawa",
      "nides",
      "carro",
      "rilia",
      "stea",
      "lia",
      "lea",
      "ria",
      "nov",
      "phus",
      "mia",
      "nerth",
      "wei",
      "ruta",
      "tov",
      "zuno",
      "vis",
      "lara",
      "nia",
      "liv",
      "tera",
      "gantu",
      "yama",
      "tune",
      "ter",
      "nus",
      "cury",
      "bos",
      "pra",
      "thea",
      "nope",
      "tis",
      "clite",
    ],
    "6": [
      "una",
      "ion",
      "iea",
      "iri",
      "illes",
      "ides",
      "agua",
      "olla",
      "inda",
      "eshan",
      "oria",
      "ilia",
      "erth",
      "arth",
      "orth",
      "oth",
      "illon",
      "ichi",
      "ov",
      "arvis",
      "ara",
      "ars",
      "yke",
      "yria",
      "onoe",
      "ippe",
      "osie",
      "one",
      "ore",
      "ade",
      "adus",
      "urn",
      "ypso",
      "ora",
      "iuq",
      "orix",
      "apus",
      "ion",
      "eon",
      "eron",
      "ao",
      "omia",
    ],
  };
  let mtx = [
    [1, 1, 2, 2, 5, 5],
    [2, 2, 3, 3, 6, 6],
    [3, 3, 4, 4, 5, 5],
    [4, 4, 3, 3, 6, 6],
    [3, 3, 4, 4, 2, 2, 5, 5],
    [2, 2, 1, 1, 3, 3, 6, 6],
    [3, 3, 4, 4, 2, 2, 5, 5],
    [4, 4, 3, 3, 1, 1, 6, 6],
    [3, 3, 4, 4, 1, 1, 4, 4, 5, 5],
    [4, 4, 1, 1, 4, 4, 3, 3, 6, 6],
  ];
  let fn = function (i) {
    return Math.floor(Math.random() * vowels[i].length);
  };
  let name = "";
  let comp = mtx[0 % mtx.length];
  for (let i = 0; i < comp.length / 2; i++) {
    name += vowels[comp[i * 2]][fn(comp[i * 2 + 1])];
  }
  return name;
}
