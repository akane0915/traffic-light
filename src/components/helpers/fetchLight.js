const fetchLight = ({ mode, activeColor }) => {
  switch (mode) {
    case "random":
      return new Promise((resolve, reject) => {
        resolve(getRandomColor());
      });

    case "ordered":
      return new Promise((resolve, reject) => {
        resolve(getOrderedColor(activeColor));
      });

    default:
      break;
  }
};

const getRandomColor = () => {
  const options = ["green", "yellow", "red"];
  return options[Math.floor(Math.random() * 3)];
};

const getOrderedColor = activeColor => {
  switch (activeColor) {
    case "green":
      return "yellow";

    case "yellow":
      return "red";

    case "red":
      return "green";

    default:
      break;
  }
};

export default fetchLight;
