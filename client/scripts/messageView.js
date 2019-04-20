var MessageView = {

  // render: _.template(`
  //     <!--
  //     <div class="chat">
  //       <div class="username"></div>
  //       <div></div>
  //     </div>
  //     -->
  //   `)

    render: _.template(`
      <div class="chat">
        <div class="<%- username %>"><%- text %></div>
        <div><%- roomname %></div>
      </div>
    `)

};