'use strict';

import nav from "./nav.js";
import sliderFunc from "./slider.js";

const documentReady = () => {
  nav();
  sliderFunc();
}

document.addEventListener('DOMContentLoaded', documentReady);