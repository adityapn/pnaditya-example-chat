 $("#loginButton").click(function(){
        var username = $("#loginName").val();
        var password = $("#loginPassword").val();
        if (username && password) {
            $.post(
                '/login',
                {username: username, password:password},
                function () {
                    window.location = "/chat";
                }
            ).fail(function(res){
            	$('#errors').html("<b>invalid username / password</b>");                
            });
        } else {
            $('#errors').html("<b>A username and password are required</b>");
        }
    });
    // end of login 

    // Sign up function
    $("#signupButton").click(function(){
	    var username = $("#signupName").val();
	    var password = $("#signupPassword").val();
	    var confirmPassword = $("#signupConfirmPassword").val();
	    if (username && password) {
	        if (password === confirmPassword) {
	            $.post(
	            	'/signup',
	                {username: username, password:password},
	                function () {
	                    window.location = "/chat";
	                }
	            ).fail(function(res){
	            	$('#errors').html("<b>username already taken</b>");	                
	            });
	        } else {
	        	$('#errors').html("<b>Passwords don't match</b>");	            
	        }   
		    } else {
		    	$('#errors').html("<b>A username and password are required</b>");		        
		    }
	});
