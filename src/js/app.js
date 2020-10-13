$(function () {

    // フロートヘッダーメニュー
    //heroの高さ文スクロールされたらヘッダーの背景を帰る
    //まず、ヒーローの高さを取得する
    let height = $('.js-float-menu-target').height();
    //windがスクロールされたら背景を変更
    $(window).on('scroll', function(){
        //処理, どのくらいスクロールされるか
        $('.js-float-menu').toggleClass('header--active', $(this).scrollTop() > height );
    });

    // SPメニュー
    $('.js-toggle-sp-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });

    $('.js-toggle-sp-menu-target').on('click', function(){
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu').toggleClass('active');
    });


});