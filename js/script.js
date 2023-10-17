$(document).ready(function () {

    $("nav").animate({

        top: "0"

    }, 500);

    $("#landing").animate({

        left: "50%",

    }, 1000);
    
    $("#logo").fadeIn(2300);
    $("#contacts").fadeIn(1100);
    $("#place").fadeIn(1400);
    $("#abouts").fadeIn(1700);
    $("#home").fadeIn(2000);




//repeating
    test();
    function test(){
        $("#img22").animate({top: '20px'},2000);
        $("#img22").animate({top: '-20px'},2000,function(){
            test();
        });
    }
//back to top
    $("#toTop").click(function () {
        
        $("html, body").animate({scrollTop: 0}, 1000);
     });
//showing scroll
$(document).scroll(function() {

    var y = $(this).scrollTop();

    if (y > 3000) {
      $("#divtest").fadeIn(2000);
      $("#divtest").animate({right: '20px'},2000);
    }
  });


});