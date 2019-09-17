
$('.shape').click(function(){
    let activeElement = $('.active');
    activeElement.removeClass('active');
    let element = $(this);
    let text = element.text().trim();
    element.addClass('active');
});
