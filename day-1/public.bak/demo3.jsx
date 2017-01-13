var Greeter=React.createClass({
  render: function(){
   var name=this.props.name;
   var city=this.props.city;
  return (
    <div>
      <h1> Hello {name} ,you belong to {city}!</h1>
      <p> this is from a component!</p>
    </div>
    );
  }
})

ReactDOM.render(
 <Greeter name="shashi" city="Bangalore"/>,
 document.getElementById('app')
);
