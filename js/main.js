(function() {
  "use strict";

  $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })     
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  let homeCarouselIndicators = select("#home-carousel-indicators")
  let homeCarouselItems = select('#homeCarousel .carousel-item', true)

  homeCarouselItems.forEach((item, index) => {
    (index === 0) ?
    homeCarouselIndicators.innerHTML += "<li data-bs-target='#homeCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      homeCarouselIndicators.innerHTML += "<li data-bs-target='#homeCarousel' data-bs-slide-to='" + index + "'></li>"
  });
})()