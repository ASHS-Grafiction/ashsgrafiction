function thisisaphone() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return true;   
    } else {
        return false;
    }
}

firstTap = true;

$( ".card-body" ).hide();

$(".card").hover(function() {
    if(thisisaphone()){
        $( ".card-body" ).slideUp(200);
        firstTap = true;
    }
   $(this).children(".card-body").slideDown(300);
});

if(!thisisaphone()){
    $(".card").mouseout(function() {
       $(this).children(".card-body").slideUp(200);
    });
}