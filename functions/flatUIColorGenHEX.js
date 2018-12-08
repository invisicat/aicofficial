module.exports = () => {
  colors = [
    "#eb4d4b",
    "#ffbe760",
    "#ff7979",
    "#badc58",
    "#f0932b",
    "#6ab04c",
    "#686de0",
    "#4834d4"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
