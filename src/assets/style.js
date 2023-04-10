$(document).ready(function(){
    $(window).resize(function() {
     if ($(window).width() < 770) {
       $('#img').hide();
     } else {
       $('#img').show();
     }
   });
 });