setTimeout(function(){
    $('#content').animate({
        height: 300
    }, 1000*60)
    $('#content').animate({
        height: 0
    }, 1000*60)

}, 1000)
setTimeout(function(){
    $('#minutes').html('<span>1</span>Minute');
    $('#minutes').css({
        left: 645
    })
}, 1000*60)
setTimeout(function(){
    $('#minutes').html('<span>0</span>Minutes');
    $('#minutes').css({
        left: 640
    })
}, 2000*60)

