var Greeter=React.createClass({

getDefaultProps: function(){
  return {
    name:'React'
  };
},
onBtnclick:function(e){
   e.preventDefault();
   var usr=this.refs.user.value;
   alert(usr);
},
  render: function(){
    var name= this.props.name;
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
