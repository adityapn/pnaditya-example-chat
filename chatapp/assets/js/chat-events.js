$("#postMessageButton").click(function(){
      var messageText = $("#message").val();  
      var username = $('#username').text();  
      messages.create({message: messageText,username: username}, {wait: true});
      $("#message").val("");
  });