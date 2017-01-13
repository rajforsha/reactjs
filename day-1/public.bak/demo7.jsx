var Greeter=React.createClass({

getDefaultProps: function(){
  return {
    name:'React',
    message:'no message'
  };
},

 getInitialState: function(){
   return {
     name: this.props.name,
     message: this.props.message
   };
 },
onBtnclick:function(e){
   e.preventDefault();
   var nameref=this.refs.user;
   var name=nameref.value;

   var messageref=this.refs.message;
   var message=messageref.value;

   nameref.value='';
   messageref.value='';
   if(typeof name === 'string' && name.length>0){
   this.setState({
      name:name
   });
   }
   if(typeof message === 'string' && message.length>0){
   this.setState({
      message:message
   });
   }
},
  render: function(){
    var name= this.state.name;
    var message=this.state.message;
  return (
    <div>
      <h1> NAME: Hello {name}</h1>
      <p> MESSAGE: {message}!</p>
      <form onSubmit={this.onBtnclick}>
      Name:  <input type="text" ref="user"/><br></br>
      Message:  <input type="text" ref="message"/><br></br>
        <button> set </button>
        </form>
    </div>
    );
  }
})

ReactDOM.render(
 <Greeter />,
 document.getElementById('app')
);
