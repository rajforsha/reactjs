var redux=require('redux');

console.log('starting redux example');

var reducer=(state={name:'shashi'},action)=>{

     switch(action.type){
       case 'CHANGE_NAME':
       return {
       ...state,
       name: action.name
       };
      default:
      return state;
      }
};

var store=redux.createStore(reducer);
var currenctState=store.getState();
console.log('current state',currenctState);

store.dispatch({
   type: 'CHANGE_NAME',
   name: 'Shashi Raj'
});
store.dispatch({
   type: 'CHANGE_NAME',
   name: 'rajshashi3@gmail.com'
});
