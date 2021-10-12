$( document ).ready( function() {

  if ( $( '.products' ).length ) {
    $('.products').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:"<a href='#' class='slick-arrow slick-prev'><img src='./images/icons/arrow-left.png'></a>",
      nextArrow:"<a href='#' class='slick-arrow slick-next'><img src='./images/icons/arrow-right.png'></a>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });   
  }

  if ( $( '.logos' ).length ) {
    $('.logos').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:"<a href='#' class='slick-arrow slick-prev'><img src='./images/icons/arrow-left.png'></a>",
      nextArrow:"<a href='#' class='slick-arrow slick-next'><img src='./images/icons/arrow-right.png'></a>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });   
  }

  if ( $( '.portfolios' ).length ) {
    $('.portfolios').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:"<a href='#' class='slick-arrow slick-prev'><img src='./images/icons/arrow-left.png'></a>",
      nextArrow:"<a href='#' class='slick-arrow slick-next'><img src='./images/icons/arrow-right.png'></a>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });   
  }

  if ( $( '.categories' ).length ) {
    $('.categories').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:"<a href='#' class='slick-arrow slick-prev'><img src='./images/icons/arrow-left.png'></a>",
      nextArrow:"<a href='#' class='slick-arrow slick-next'><img src='./images/icons/arrow-right.png'></a>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
          }
        },
      ]
    });
  }

  if ( $( '.testimonials' ).length ) {
    $('.testimonials').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:"<a href='#' class='slick-arrow slick-prev'><img src='./images/icons/arrow-left.png'></a>",
      nextArrow:"<a href='#' class='slick-arrow slick-next'><img src='./images/icons/arrow-right.png'></a>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
          }
        },
      ]
    });
  }

  if ( $( '.bestsellers-slick' ).length ) {
    $('.bestsellers-slick').slick({
      dots: false,
      arrows: true,
      speed: 300,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:"<a href='#' class='slick-arrow slick-prev best-control'><img src='./images/icons/arrow-left.png'></a>",
      nextArrow:"<a href='#' class='slick-arrow slick-next best-control'><img src='./images/icons/arrow-right.png'></a>",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
          }
        }
      ]
    });   
  }


});