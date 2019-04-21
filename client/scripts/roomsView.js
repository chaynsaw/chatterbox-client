var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  

  },

  render: function(message) {
    var compileRoom = _.template(`<option value="<%- roomName %>"><%- roomName %></option>`)
    return compileRoom(message);
  },

  renderRoom: function(roomName) {
    var obj = {'roomName': roomName}
    $('#rooms select').append(this.render(obj));
  }

};
