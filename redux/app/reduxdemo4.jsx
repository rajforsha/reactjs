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

var unsub=store.subscribe(()=>{
  var state=store.getState();
  console.log('name is',state.name);
});

store.dispatch({
   type: 'CHANGE_NAME',
   name: 'Shashi Raj'
});

unsub();

store.dispatch({
   type: 'CHANGE_NAME',
   name: 'rajshashi3@gmail.com'
});
