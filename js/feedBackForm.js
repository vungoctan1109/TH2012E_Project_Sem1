$().ready(function() {
    $("#feedBackForm").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "fullName": {
                required: true
            },
            "email": {
                required: true,
                email:true
            },
            "textArea": {
                required: true,
                minlength: 20
            }
        },
        messages: {
            "fullName": {
                required: "*Full-name is required"
            },
            "email": {
                required: "*Email is required",
                email: "*Please enter a valid email address"
            },
            "textArea": {
                required: "*Must not be left blank",
                minlength: "*Please enter at least 20 characters"
            }
        },
        highlight: function (element) {
            $(element).parent().addClass('error')
        },
        unhighlight: function (element) {
            $(element).parent().removeClass('error')
        }
    });



});