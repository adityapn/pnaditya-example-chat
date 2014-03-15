var socket = io.connect('http://localhost:1337');
socket.on('connect',function(){
	socket.request('/messages',{},function(msgs){
		console.log(msgs);
	});

	socket.on('message',function(message){
		$('#msg_list').append("<li><b>"+message.data.username+"</b>: "+message.data.message+"</li>");
		var elem = document.getElementById('messagesContainer');
	  	elem.scrollTop = elem.scrollHeight;
	});
});