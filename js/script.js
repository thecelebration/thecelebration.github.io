// equalheight = function(container){

// var currentTallest = 0,
//      currentRowStart = 0,
//      rowDivs = new Array(),
//      $el,
//      topPosition = 0;
//  $(container).each(function() {

//    $el = $(this);
//    $($el).height('auto')
//    topPostion = $el.position().top;

//    if (currentRowStart != topPostion) {
//      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
//        rowDivs[currentDiv].height(currentTallest);
//      }
//      rowDivs.length = 0; // empty the array
//      currentRowStart = topPostion;
//      currentTallest = $el.height();
//      rowDivs.push($el);
//    } else {
//      rowDivs.push($el);
//      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
//   }
//    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
//      rowDivs[currentDiv].height(currentTallest);
//    }
//  });
// }

// $(window).load(function() {
//   equalheight('.page-body');
// });


// $(window).resize(function(){
//   equalheight('.page-body');
// });
var userName
$(window).load(function() {
  $('.page-body').css("height", $(window).height()-115)
  $('.bg').css("height", $(window).height()-115)
  userName = window.location.href.split("name=")[1].replace("%20"," ");
  $(".user-name").text(userName) 
});

$(document).on("click","#nameSubmit",function(){
	var newUserName = $("#userName").val()
	window.location.href = "page-1.html?name="+newUserName+""
  $(".share a").attr("href","whatsapp://send?text=thecelebration.github.io/newYear/page-1.html?name="+newUserName+"")
})

// popup js
jQuery(document).ready(function($){
  //open popup
  $('.create-tab').on('click', function(event){
    event.preventDefault();
    $('.cd-popup').addClass('is-visible');
  });
  
  //close popup
  $('.cd-popup').on('click', function(event){
    if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });

  $('.popup-close').on('click', function(event){
    event.preventDefault();
    $('.cd-popup').removeClass('is-visible');
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
      if(event.which=='27'){
        $('.cd-popup').removeClass('is-visible');
      }
    });
});