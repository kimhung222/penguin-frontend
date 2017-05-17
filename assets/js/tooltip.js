$(document).ready(function() {
    $('.game-float-wrapper').hover(function() {
        $(this).find('.item-tool-tip').show();
    });
    $('.game-float-wrapper').mouseleave(function() {
        $(this).find('.item-tool-tip').hide();
    });
});