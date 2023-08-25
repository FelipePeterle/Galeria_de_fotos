$(function(){

    $('a.galeria').bind('click',function(){
        let img = $(this).find('img').attr('src');
        $('.divbox img').attr('src',img);
        $('.bgbox, .divbox').fadeIn('fast');
        $('.divbox').css('height', '300px');
    })

    $('.bgbox, .divbox button').bind('click',function(){
        $('.bgbox, .divbox').fadeOut('fast');
    })

});