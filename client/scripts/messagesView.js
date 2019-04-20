var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render:  _.template(`
    <div class="chat">
    <div class="username <%- username %>"><%- username %>:</div>
        <div><%- text %></div>
        </div>
    `),
        
        // I object, O 
  renderMessages: function() { // calls the MessageView.render method on each message
    for (let i = 0; i < Messages.storedMessages.results.length; i++) { // loop through storedMessages
      let currentMessage = Messages.storedMessages.results[i];
      if (currentMessage.username === undefined) {
        currentMessage.username = '';
      }
      let renderedMsg = this.render(currentMessage); // render each message into a dom element
      $('#chats').append(renderedMsg);
    }
  }
  
};

/*
App.fetch();
    // $('.username').on('click', function(element)) {
    //   var username = $(element).html().innerHTML;
    //   Friends.friendsList.push(username);
    // }
*/