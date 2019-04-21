var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    
    // Fetch initial batch of messages
    App.startSpinner();
    // debugger;
    App.fetch(App.stopSpinner);
    App.fetch(App.startSessionTime);
  },
  
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      
      Messages.storedMessages = data; // saves data from parse call
      // debugger; 
      $('.chat').detach(); // detach all previous posts before reloading
      MessagesView.renderMessage(); // needs to render the message stream once Parse has returned data
      callback();
    });
  },
  
  startSpinner: function() {
    console.log('start spinner')
    App.$spinner.show();
    FormView.setStatus(true);
  },
  
  
  stopSpinner: function() {
    console.log('stop spinner')
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },
  
  fiveSeconds: function() {
    console.log('5 second timer');
  },

  startSessionTime: function() {
    setTimeout(App.startSessionTime, 1000);
    App.sessionTime += 1;
    App.fetch();
    console.log(App.sessionTime);
  },

  sessionTime: 0,

};
