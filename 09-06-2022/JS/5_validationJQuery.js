$("#frm").validate({
    rules:{
        name:{
            required:true,
            minlength:2
        },
        email:{
            required:true,
            email:true
        },
        password:{
            required: true,
            minlength: 6
        },

    },messages:{
        name:{
            required:'please enter you name',
            minlength:'length of name must be greater than 1'
        },
        email:{
            required:'please enter email',
            email:'Email is not valid'
        },
        password:{
            required: 'please enter password',
            minlength: "password contains atleast 6 characters."
        }
    },
    submitHandler:function(form){
        form.submit();
    }
});

