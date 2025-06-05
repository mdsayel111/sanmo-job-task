// set window width and height to variables for daynamic styling
const prevWindowWidth = document.documentElement.clientWidth;

const setWindowWidthAndHeight = () => {
  // const windowWidth = document.documentElement.clientWidth;
  const windowWidth = document.documentElement.clientWidth;
  const windowHeight = document.documentElement.clientHeight;

  // if (prevWindowWidth !== windowWidth) {
  //   return;
  // }
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
