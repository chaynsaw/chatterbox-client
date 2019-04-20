var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },
  // I object, O 
  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message))
  }

};