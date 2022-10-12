$("#home").click(function () {
    $("#homeContent").css('display','block');
    $("#customerContent").css('display','none');
    /*$("#itemContent").css('display','none');
    $("#orderContent").css('display','none');*/
});

$("#customer").click(function () {
    $("#homeContent").css('display','none');
    $("#customerContent").css('display','block');
    /*$("#itemContent").css('display','none');
    $("#orderContent").css('display','none');*/
});