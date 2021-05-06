$().ready(()=>{
    $(".contact-from").validate({
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

            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: "*Email is required.",
                email: "*Email must include @."
            },
            name: {
                required: "*Name is required."
            },
            subject: {
                required: "*Subject is required."
            },

            message: {
                required: "*Message is required."
            }
        }
    });
});