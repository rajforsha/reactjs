var React=require('react');
var ReactDOM=require('react-dom');


// display presentor
var GreetMessage= React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;
      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});

//form presentor
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;
    var message=this.refs.message.value;
    if (name.length > 0&&message.length>0) {
      this.refs.name.value = '';
      this.refs.message.value='';
      this.props.onNewChange(name,message);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
          <input type="text" ref="message"/>
        <button>Set Name</button>
      </form>
    );
  }
});


var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        message:this.props.message
    };
  },

  handleNewChange: function (name,message) {
  this.setState({
    name: name
  });
  this.setState({
    message: message
  });
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreetMessage name={name} message={message}/>
        <GreeterForm onNewChange={this.handleNewChange}/>
      </div>
    );
  }
});



ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
