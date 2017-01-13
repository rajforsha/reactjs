var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var contact=require('contact');
var career=require('career');
var location=require('location');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
          <Route path="Weather" component={Weather}/>
      <Route path="career" component={career}/>
        <Route path="location" component={location}/>
      <IndexRoute component={contact}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
