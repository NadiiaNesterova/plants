/*Burger menu*/
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('.body').toggleClass('lock');
  });
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".header__burger").length === 0) {
    $(".header__menu").removeClass('active');
    $(".header__burger").removeClass('active');
  }
});

/*Blur*/
$(document).ready(function () {
  $('.button1').click(function (event) {
    $('.lawn,.planting').toggleClass('blur');
  });
});

$(document).ready(function () {
  $('.button2').click(function (event) {
    $('.garden,.planting').toggleClass('blur');
  });
});
$(document).ready(function () {
  $('.button3').click(function (event) {
    $('.lawn,.garden').toggleClass('blur');
  });
});

$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".button1").length === 0) {
    $(".lawn").removeClass('blur');
    $(".planting").removeClass('blur');
  }
});

$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".button2").length === 0) {
    $(".garden").removeClass('blur');
    $(".planting").removeClass('blur');
  }
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".button3").length === 0) {
    $(".lawn").removeClass('blur');
    $(".garden").removeClass('blur');
  }
});

/*Accordion*/
var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
  var details = event.target.parentNode.children;
  for(i=0;i<details.length;i++) {
    if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
    details[i].removeAttribute("open");
  }
} 

class Accordion {
    constructor(el) {
      this.el = el;
      this.summary = el.querySelector('summary');
      this.content = el.querySelector('.price-desc');
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.summary.addEventListener('click', (e) => this.onClick(e));
    }
    
    //Плавность открытия
    onClick(e) {
      e.preventDefault();
      this.el.style.overflow = 'hidden';
      if (this.isClosing || !this.el.open) {
        this.open();
      } else if (this.isExpanding || this.el.open) {
        this.shrink();
      }
    }
    //Закрыть аккордеон
    shrink() {
      this.isClosing = true;
      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${this.summary.offsetHeight}px`;
       
      if (this.animation) {
        this.animation.cancel();
      }
      this.animation = this.el.animate({
        height: [startHeight, endHeight]
      }, {
        duration: 600,
        easing: 'ease-out'
      });
      this.animation.onfinish = () => this.onAnimationFinish(false);
      this.animation.oncancel = () => this.isClosing = false;
    }
  
    //Открыть аккордеон
    open() {
      this.el.style.height = `${this.el.offsetHeight}px`;
      this.el.open = true;
      window.requestAnimationFrame(() => this.expand());
    }
    
    //Отобразить меню
    expand() {
      this.isExpanding = true;
      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
      
      if (this.animation) {
        this.animation.cancel();
      }
      
      this.animation = this.el.animate({
        height: [startHeight, endHeight]
      }, {
        duration: 600,
        easing: 'ease-out'
      });
      this.animation.onfinish = () => this.onAnimationFinish(true);
      this.animation.oncancel = () => this.isExpanding = false;
    }
  
    onAnimationFinish(open) {
      this.el.open = open;
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.el.style.height = this.el.style.overflow = '';
    }
  }
  
  document.querySelectorAll('details').forEach((el) => {
    new Accordion(el);
  });



//Menu city
let select = document.getElementById('select');
let block = document.querySelectorAll('.block');
let lastIndex = 0; // После каждой смены опции, сохраняем сюда индекс предыдущего блока

select.addEventListener('change', function() {
  block[lastIndex].style.display = "none"; 
  // Чтобы сразу делать именно его невидимым при следующей смене 

  let index = select.selectedIndex; // Определить индекс выбранной опции
  block[index].style.display = "block"; // Показать блок с соответствующим индексом

  lastIndex = index; // Обновить сохраненный индекс.
});





  
    
     

























