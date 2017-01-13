var Greeter=React.createClass({
  render: function(){
  return (
    <div>
      <h1> Hello react!</h1>
      <p> this is from a component!</p>
    </div>
    );
  }
})

ReactDOM.render(
 <Greeter/>,
 document.getElementById('app')
);
