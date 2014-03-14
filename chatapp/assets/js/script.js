/*
var MessageModel = Backbone.Model.extend({
    urlRoot: '/messages',
});

var MessageCollection = Backbone.Collection.extend({
    url: '/messages',
    model: MessageModel,
});

var messages = new MessageCollection();
messages.fetch();

$("#postMessageButton").click(function(){
    var messageText = $("#message").val();
    alert(messageText);
    messages.create({message: messageText}, {wait: true});
    $("#message").val("");
});
*/