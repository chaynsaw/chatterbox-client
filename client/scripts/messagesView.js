var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    console.log('testing 10 sec')
    // setTimeout(App.fetch(MessagesView.initialize), 10000);
    // MessagesView.renderMessage();
  },

  render:  _.template(`
    <div class="chat">
    <div class="username <%- username %>"><%- username %>:</div>
        <div><%- text %></div>
        </div>
    `),
        
        // I object, O 
  renderMessage: function() { // calls the MessageView.render method on each message
    if (arguments[0]) {
      let currentMessage = this.render(arguments[0]);
      $('#chats').append(currentMessage);
    } else {
      for (let i = Messages.storedMessages.results.length - 1; i > 0; i--) { // loop through storedMessages
        let currentMessage = Messages.storedMessages.results[i];
        if (currentMessage.username === undefined) {
          currentMessage.username = '';
        }
        if (currentMessage.text === undefined) {
          currentMessage.text = '';
        }
        let renderedMsg = this.render(currentMessage); // render each message into a dom element
        $('#chats').prepend(renderedMsg);
      }
    }
  }
  
};
