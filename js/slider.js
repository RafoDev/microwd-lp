
const sliderFunc = () => {
  const sliders = [...document.querySelectorAll(".slider__body")];
  const arrowNext = document.querySelector("#before");
  const arrowBefore = document.querySelector("#after");
  let value;
  let isPaused = false;
  arrowNext.addEventListener('click', () => changePosition(-1));
  arrowBefore.addEventListener('click', () => changePosition(1));

  const changePosition = (change) => {
    const currElement = Number(document.querySelector(".slider__body--show").dataset.id);
    value = currElement;
    value = value + change;
    if (value === 0 || value === sliders.length + 1) {
      value = value === 0 ? sliders.length : 1;
    }
    sliders[currElement - 1].classList.toggle('slider__body--show');
    sliders[value - 1].classList.toggle('slider__body--show');
  }
  let auto = setInterval(() => {
    if (!isPaused) {
      changePosition(1);
      // isPaused = false;
    }
  }, 2000);
  // const slide = setInterval(changePosition(1), 1);
  const slider = document.querySelector(".slider");
  slider.addEventListener('mouseover', () => {
    isPaused = true;
  });
  slider.addEventListener('mouseout', () => {
    isPaused = false;
  });
}
export default sliderFunc;