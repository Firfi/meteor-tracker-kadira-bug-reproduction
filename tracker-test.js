if (Meteor.isClient) {

  var HelloMessage = React.createClass({displayName: "HelloMessage",
    render: function() {
      notExist();
      return React.createElement("div", null, "Hello ", this.props.name);
    }
  });

  var templateName = 'hello';

  var templateClass = new Template(
    templateName,
    function() {
      // A placeholder HTML element that will serve as the mounting
      // point for the React component.
      return new HTML.DIV;
    }
  );

  Template[templateName] = templateClass;

  templateClass.onRendered(function() {
    React.render(React.createElement(HelloMessage, {name: "John"}), this.firstNode);
  });

  // SIC

  Template.hello2.onRendered(function() {
    React.render(React.createElement(HelloMessage, {name: "Igor"}), this.firstNode);
  })

}

if (Meteor.isServer) {
  Kadira.connect('oYLWc4o9kfyCdb69s', '46d8d21e-1b2b-44ba-b08d-1e225f88b4a6');
}

