$(function () {
    $(".product").draggable({
        revert: "invalid"
    });

    $(".model").droppable({
        accept: ".product",
        drop: function (event, ui) {
            $(".model").addClass("hide-animation");
            $(".ads").addClass("after");
            setTimeout(function () {
                $('.hide-animation .model-img').hide();
                $('.hide-animation .clear-face').show();
            }, 1500);
        }
    });
});