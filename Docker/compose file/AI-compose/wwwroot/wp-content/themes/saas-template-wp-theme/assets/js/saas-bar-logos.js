  var module_7543265 = (function() {
    var __hs_messages = {};
    i18n_getmessage = function() {
      return hs_i18n_getMessage(__hs_messages, hsVars['language'], arguments); 
    };
    i18n_getlanguage = function() {
      return hsVars['language']; 
    };
$(window).load(function() {
  $('.logos').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    appendArrows: '.saas-bar-logo-1 .slick-list',
    nextArrow: '<div class="slick-next"><svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Homepage-A:-TOFU" transform="translate(-1187.000000, -5267.000000)"><g id="TESTIMONIAL-SLIDER-2" transform="translate(-563.000000, 4879.000000)"><g id="TESTIMONIAL-SLIDER"><g id="ARROW-RIGHT" transform="translate(1750.000000, 388.000000)"><path d="M27.000028,-1.85851334e-13 C41.911775,-1.85851334e-13 54,12.088281 54,27.00014 C54,41.911719 41.911775,54 27.000028,54 C12.088393,54 -1.15407683e-13,41.911719 -1.15407683e-13,27.00014 C-1.15407683e-13,12.088281 12.088393,-1.85851334e-13 27.000028,-1.85851334e-13 Z" id="Ellipse-5" fill="#79F2C0"></path><polygon id="-f" fill="#000000" points="29.640695 24.3450549 18 24.3450549 18 27.6546521 29.640695 27.6546521 24.6288257 32.6592701 26.9731108 35 36 26.0135608 26.9731108 17 24.6557568 19.340437"></polygon></g></g></g></g></g></svg></div>',
    prevArrow: '<div class="slick-prev"><svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Homepage-A:-TOFU" transform="translate(-157.000000, -5267.000000)"><g id="TESTIMONIAL-SLIDER-2" transform="translate(-563.000000, 4879.000000)"><g id="TESTIMONIAL-SLIDER"><g id="ARROW-LEFT" transform="translate(747.000000, 415.000000) scale(-1, 1) translate(-747.000000, -415.000000) translate(720.000000, 388.000000)"><path d="M27.000028,-1.85851334e-13 C41.911775,-1.85851334e-13 54,12.088281 54,27.00014 C54,41.911719 41.911775,54 27.000028,54 C12.088393,54 -1.15407683e-13,41.911719 -1.15407683e-13,27.00014 C-1.15407683e-13,12.088281 12.088393,-1.85851334e-13 27.000028,-1.85851334e-13 Z" id="Ellipse-5" fill="#79F2C0"></path><polygon id="-f" fill="#000000" points="29.640695 24.3450549 18 24.3450549 18 27.6546521 29.640695 27.6546521 24.6288257 32.6592701 26.9731108 35 36 26.0135608 26.9731108 17 24.6557568 19.340437"></polygon></g></g></g></g></g></svg></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 1000,
          variableWidth: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          variableWidth: false
        }
      }
    ]
  });
});
  })();
