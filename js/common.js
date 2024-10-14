$(document).ready(function(){//실행틀 시작

    //팝업
    $(".popup-close").click(function(){
      $(".popup").slideUp();
      $("header").addClass("fixed");
    });

  //헤더 .m-gnb
  $(".mgnb-ham").click(function(){
    $(".mgnb-wrap").animate({left : "0"}, 500)
  });

  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate({left : "100%"}, 500)
  });

  //.mgb-wrap을 꺼냈을때 depth2는 숨겨져있어야한다.
  // $(".mdepth2").hide();
  

  // $(".mgnb > li").click(function(){
  //   $(this).children(".mdepth2").slideDown();
  //   $(this).siblings().children(".mdepth2").slideUp();
  // });

  $(".mgnb > li").click(function(){
		if($(this).children(".mdepth2").css("display") == "none"){
			$(".mdepth2").slideUp(500);
			$(this).children(".mdepth2").slideDown(500);
		}else{
			$(".mdepth2").slideUp(500);
		}
  });

  $(".depth2").hide();

  //.gnb > li 에 마우스가 들어가면 다음과 같은 일이 일어남
  /* 
   사용자가 선택한 gnb > li 인 this 의 자식 .depth2 서서히 나와야함
  */
  $(".gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().fadeIn();
  });

  $(".gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().fadeOut();
  });

  

});