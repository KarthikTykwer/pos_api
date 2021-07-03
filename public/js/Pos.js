$(document).ready(function(){

    $('#divLoginPage').show();
    $('#divMainPage').hide();

    $('.srcActive').click(function(){
        $('.srcActive').removeClass('active');
        $('#mainIframe').attr('src',$(this).attr('srccontent'));
        $(this).addClass('active');
    });

    $('#btnLogin').click(function(){
        $('#divLoginPage').hide();
        $('#divMainPage').show();
    });

    $('#liLogout').click(function(){
        $('#divLoginPage').show();
        $('#divMainPage').hide();
        $('#liDashBoard').click();
        $('#aCompanyName').attr('class','collapsed');
        $('#aCompanyName').attr('aria-expanded','false');
        $('#collapseExample').attr('class','collapse');
    });
});