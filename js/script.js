$('#counter').countdown({
  date: '07/04/2022 23:59:59'
  }, function () {
    alert('Happy Deal!');
  });

//swiper slide //

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.fa-arrow-right-long',
    prevEl: '.fa-arrow-left-long',
  },
  
});

//swiper navigation color
  $('.fa-arrow-right-long').click(function(){
    $(this).css("color","#F47606");
    $('.fa-arrow-left-long').css("color","#363636");
  });
  $('.fa-arrow-left-long').click(function(){
    $(this).css("color","#F47606");
    $('.fa-arrow-right-long').css("color","#363636");
  });

// $(document).ready(function(){
//   $('.run').imagezoomsl({
//     loopspeedanimate: 2.5,
//     scrollspeedanimate: 3 ,
//     magnifycursor: 'crosshair',
//     cursorshade: false,
    
//   });
    
// });