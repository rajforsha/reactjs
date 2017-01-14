var redux=require('redux');

console.log('starting redux example');

var mystate={
   name: 'shashi',
   hobbies:[],
   movies:[]
}
var nextHobbyId=1;
var nextMovieId=1;
var reducer=(state=mystate,action)=>{
     switch(action.type){
       case 'CHANGE_NAME':
       return {
       ...state,
       name: action.name
       };
       case 'ADD_HOBBY':
       return {
        ...state,
          hobbies:[
           ...state.hobbies,
           {
             id:nextHobbyId++,
             hobby:action.hobby
           }
          ]
       }
       case 'ADD_MOVIE':
       return {
        ...state,
          movies:[
           ...state.movies,
           {
             id:nextMovieId++,
             movie:action.movie
           }
          ]
       }
      default:
      return state;
      }
};

var store=redux.createStore(reducer,redux.compose(
  window.devToolsExtension?  window.devToolsExtension() : f=>f
));

store.subscribe(()=>{
  var state=store.getState();
  console.log(state);
});

store.dispatch({
   type: 'ADD_HOBBY',
   hobby: 'coding'
});

store.dispatch({
   type: 'ADD_MOVIE',
   movie: 'Bajrangi bhaijaan'
});
store.dispatch({
   type: 'CHANGE_NAME',
   name: 'Shashi Raj'
});

store.dispatch({
   type: 'CHANGE_NAME',
   name: 'rajshashi3@gmail.com'
});
