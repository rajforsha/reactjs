var Greeter=React.createClass({

getDefaultProps: function(){
  return {
    name:'React'
  };
},

 getInitialState: function(){
   return {
     name: this.props.name
   };
 },
onBtnclick:function(e){
   e.preventDefault();
   var name=this.refs.user.value;
   this.setState({
      name:name
   });
},
  render: function(){
    var name= this.state.name;
  return (
    <div>
      <h1> Hello {name}</h1>
      <p> this is from a component!</p>
      <form onSubmit={this.onBtnclick}>
        <input type="text" ref="user"/>
        <button> set Name</button>
        </form>
    </div>
    );
  }
})

ReactDOM.render(
 <Greeter />,
 document.getElementById('app')
);
