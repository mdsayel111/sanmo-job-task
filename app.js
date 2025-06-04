// set window width and height to variables for daynamic styling

const setWindowWidthAndHeight = () => {
  const windowWidth = window.innerWidth;
  console.log(windowWidth);

  const windowHeight = window.innerHeight;
  document.documentElement.style.setProperty(
    "--window-width",
    windowWidth / 100
  );
  document.documentElement.style.setProperty(
    "--window-height",
    windowHeight / 100
  );
};
setWindowWidthAndHeight();

window.addEventListener("resize", setWindowWidthAndHeight);
