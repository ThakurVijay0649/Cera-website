$(function () {
    $(".member-span").click(function () {
        $("#dropdown").toggleClass("showDropdown")
        $(".arrow").toggleClass("rotateArrow")
    })

    $("#dropdown li").click(function () {
        $(this).toggleClass("active-2")
    })
    $("#dropdown li").hover(function () {
        $(this).toggleClass("active-2")
    })
    $('.show-header').click(function () {
        $('header').addClass("showHeader")
    })
    $('.cross').click(function () {
        $('header').removeClass("showHeader")
    })

})