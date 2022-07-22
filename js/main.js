(function() {
    "use strict";
  
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
    (function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

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
  
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
    let homeCarouselIndicators = select("#home-carousel-indicators")
    let homeCarouselItems = select('#homeCarousel .carousel-item', true)
  
    homeCarouselItems.forEach((item, index) => {
      (index === 0) ?
      homeCarouselIndicators.innerHTML += "<li data-bs-target='#homeCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
        homeCarouselIndicators.innerHTML += "<li data-bs-target='#homeCarousel' data-bs-slide-to='" + index + "'></li>"
    });