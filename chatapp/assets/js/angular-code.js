
angular.module('myApp', ['ngResource'])
	.factory('Message',function($resource){
		return $resource('/messages');
	})
	.controller('MsgList',function($scope,$resource) {
		$scope.messages = [];	
		var msg = $resource('/messages');	
		window.data = msg;	
		$scope.messages = msg.query();	  	
	})
	.controller('Messages',function($scope,$resource) {
		$scope.addMsg = function(){
			var messageText = $("#message").val();  
      		var username = $('#username').text(); 
      		//$('#msg_list').append("<li><b>"+message.data.username+"</b>: "+message.data.message+"</li>");
      		window.data.save({message:messageText,username:username});
      		socket.emit('send message',messageText);
      		var elem = document.getElementById('messagesContainer');
	  		elem.scrollTop = elem.scrollHeight;
	  		$("#message").val('');
		};
	});
	