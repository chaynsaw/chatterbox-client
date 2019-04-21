var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {
      'username': App.username,
      'text': $('input').val(),
      'roomName': 'test'
    }
    Parse.create(message);
    $('#chats').prepend(MessagesView.render(message));
    App.startSpinner();
    App.fetch(App.stopSpinner);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
