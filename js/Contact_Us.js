$().ready(()=>{
    $(".main_form").validate({
        onkeyup: false,
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
              required: true
            },
            subject: {
                required: true
            },
            referral: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Email is required.",
                email: "Email must include @."
            },
            name: {
                required: "Name is required."
            },
            subject: {
                required: "Subject is required."
            },
            referral: {
                required: "Referral is required."
            },
            message: {
                required: "Message is required."
            }
        }
    });
});