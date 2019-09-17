
$('.shape').click(function(){
    let element = $(this);
    let text = element.text().trim();
    element.addClass('active');
});
