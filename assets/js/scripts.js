$( ".card-body" ).hide();

$(".card").hover(function() {
   $(this).children(".card-body").show();
});

$(".card").mouseout(function() {
   $(this).children(".card-body").hide();
});