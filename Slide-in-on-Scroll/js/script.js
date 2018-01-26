function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach(img => {
    //haft way through the image
    const slideInAt = (window, scrollY + window.innerHeight) + img.height / 2;
    //the bottom of the image
    const imageBottom = img.offsetTop + img.height;
    const isHaft = slideInAt > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHaft && isNotScrolledPast) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide, 5));
