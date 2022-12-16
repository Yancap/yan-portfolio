/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  // Sticky Menu
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 100) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  // venobox popup 
  $('.venobox').venobox();

  // dropdown menu
  var mobileWidth = 992;
  var navcollapse = $('.navbar .dropdown');
  $(window).on('resize', function () {
    navcollapse.children('.dropdown-menu').hide();
  });
  navcollapse.hover(function () {
    if ($(window).innerWidth() >= mobileWidth) {
      $(this).children('.dropdown-menu').stop(true, false, true).slideToggle(250);
    }
  });

  // Progress Bar
  $(window).on('load', function () {
    $('.progress-bar').each(function () {
      var width = $(this).data('percent');
      $(this).css({
        'transition': 'width 3s'
      });
      $(this).appear(function () {
        $(this).css('width', width + '%');
        $(this).find('.count').countTo({
          from: 0,
          to: width,
          speed: 3000,
          refreshInterval: 50
        });
      });
    });
  });

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  // video iframe load
  $('.play-icon i').on('click', function () {
    var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });


  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });


  // clients logo slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // testimonial slider
  var containerEl2 = document.querySelector('#slider');
  if (containerEl2) {
    window.slider = $('#slider').cardSlider({
      slideClass: 'slide',
      delay: 300,
      transition: 'ease'
    });
  }


})(jQuery);

// Funcao para exibir o botao de voltar ao topo, quando o usuario rola para baixo
window.onscroll = function() {myFunction()};
function myFunction() {
    const SCROLL_POINT = 500;
    let btn = document.getElementById("btn-fx");
    // aux.push(btn.className);
   
    if (window.scrollY > SCROLL_POINT) {
      // btn.classList.toggle("btn-hidden",false);
      btn.style.display = "block";
    } else {
      // btn.classList.toggle("btn-hidden",true);
      btn.style.display = "none";
    }


}

// Funcoes para atribuir enderecos de todos links referentes aos projetos nas paginas dos membros

// const projetos = {
//   show_milhao : document.querySelectorAll("#link-show-milhao"),
//   search_flask : document.getElementById("link-search-flask"),
//   search_python : document.getElementById("link-search-python"),
//   incubadora : document.getElementById("link-incubadora")
// };
// projetos.show_milhao.href = "https://github.com/Davi-GCL/ShowDoMilhao";
// projetos.search_flask.href = "https://github.com/Davi-GCL/Mecanismo_Busca_Python";
// projetos.search_python.href = "";
// projetos.incubadora.href = "https://github.com/Davi-GCL/Site_Incubadora_de_Startups-FBTech";

// console.log(projetos.incubadora); 
const show_milhao = "https://github.com/Davi-GCL/ShowDoMilhao";
const search_flask = "https://github.com/Davi-GCL/Mecanismo_Busca_Python";
const search_python = "#";
const incubadora = "https://github.com/Davi-GCL/Site_Incubadora_de_Startups-FBTech";


$("a[name='link-show-milhao']").each(function() {
  this.href = show_milhao;
});

$("a[name='link-search-flask']").each(function() {
  this.href = search_flask;
});

$("a[name='link-search-python']").each(function() {
  this.href = search_python;
});

$("a[name='link-incubadora']").each(function() {
  this.href = incubadora;
});