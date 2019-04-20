var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // $('.username').on('click', function(element)) {
    //   var username = $(element).html().innerHTML;
    //   Friends.friendsList.push(username);
    // }
  },

  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `),
  // I object, O 
  renderMessage: function(message) {
    $('#chats').append(MessagesView.render(message));
    // App.fetch();
  }

};