// при переході за якорем додає "зсув" вверх щоб було видно сам заголовок
function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 50);
    }
  }
  
  // відслідковує всі кліки на посиланнях з якорями (#)
  $(document).on('click', 'a[href^="#"]', function(event) {
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });
  
  // встановлює "зсув" при переході до сторінки з якорем (# в адресі)
  window.setTimeout(offsetAnchor, 0);
