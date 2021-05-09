function thisisaphone() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return true;   
    } else {
        return false
    }
}

$( ".card-body" ).hide();

$(".card").hover(function() {
    if(thisisaphone()){
        $( ".card-body" ).hide();
    }
   $(this).children(".card-body").show();
});

if(!thisisaphone()){
    $(".card").mouseout(function() {
       $(this).children(".card-body").hide();
    });
}