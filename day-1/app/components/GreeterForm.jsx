var React=require('react');
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

module.exports = GreeterForm;
