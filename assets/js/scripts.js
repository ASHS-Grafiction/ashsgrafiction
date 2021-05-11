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
        $( ".card-body" ).slideUp(50);
        firstTap = true;
    }
   $(this).children(".card-body").slideDown(50);
});

if(!thisisaphone()){
    $(".card").mouseout(function() {
        e = event.toElement || event.relatedTarget; if (this.contains(e)) return;
        $(this).children(".card-body").slideUp(50);
    });
}