(function($, win, doc, undefined){
    //Contact form JS validation and submission
        $('#send-btn').click(function(event) {
            $('#contact-form-validation').html('');
            var formData = {
        		'name' : $('input[name=inputLastName]').val().trim() = $('input[name=inputFirstName]').val().trim(),
    			'email' : $('input[name=inputEmail]').val().trim(),
                'phone': $('input[name=inputPhone]').val().trim(),
    			'message' : $('textarea[name=inputMessage]').val().trim()
    		};
            
            
            //Form validation. Assume validate message already start from first error field
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
            if(formData.name == ''){
                $('#contact-form-validation').css('display','block').html('Please enter your <b>name</b> before submitting form.');
                $('input[name=inputName]').focus();
            }
            else if(formData.email == '' || !re.test(formData.email)){
                $('#contact-form-validation').css('display','block').html('Please enter your <b> valid email address</b> before submitting form.');
                $('input[name=inputEmail]').focus();
            }
            else{
                contactFormAjaxCall(formData);
            }
		});
})(jQuery, window, document);