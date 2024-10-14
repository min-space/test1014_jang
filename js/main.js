$(document).ready(function(){//실행틀시작

  var swiper = new Swiper(".mb", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },

    loop: true,
    effect: "fade",

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },

  });

    //재생 멈출때
  $(".mb-play").hide();
  $(".mb-pause").click(function(){
    mb.autoplay.stop();
    $(".mb-pause").hide();
    $(".mb-play").show();
  });

    //재생 시작
  $(".mb-play").click(function(){
    mb.autoplay.start();
    $(".mb-pause").show();
    $(".mb-play").hide();
  });



  //공지사항

  var noticeView = new Swiper(".notice-view", {
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    loop:true,
    direction: "vertical",
  });

  //이벤트

  var eventList = new Swiper(".event-list", {

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      loop : true,
      centeredSlides : true,
    },

    slidesPerView: 2, //한슬라이드가 보여줄 갯수
    spaceBetween: 30, //슬라이드 사이 여백
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

  
  });

  //tip1-pc

  var tip1Pc = new Swiper(".tip1-pc", {

    slidesPerView: 2, //한슬라이드가 보여줄 갯수
    spaceBetween: 30, //슬라이드 사이 여백
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

  
  });


  var tip2Pc = new Swiper(".tip2-pc", {

    slidesPerView: 2, //한슬라이드가 보여줄 갯수
    spaceBetween: 30, //슬라이드 사이 여백
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

  
  });



});//실행틀 끝