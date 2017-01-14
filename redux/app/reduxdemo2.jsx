var redux=require('redux');

console.log('starting redux example');

var reducer=(state={name:'shashi'},action)=>{
   return state;
};

var store=redux.createStore(reducer);
var currenctState=store.getState();
console.log('current state',currenctState);
