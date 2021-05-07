if(window['ga-disable-UA-6T92VW715W-Y'] == false || localStorage.getItem('dontshow') == null){
    $(document).ready(function(){ $('.toast').toast('show'); });
}

function dontshow() {
    localStorage.setItem('dontshow', true);
    location.reload();
}

function disableanalytics() {
    window['ga-disable-UA-6T92VW715W-Y'] = true;
    location.reload();
}