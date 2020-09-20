var message = "";

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/badnewsbear951@gmail.com", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Error while parsing content: exception in line 43');
    return false;
});
