export let STORE_REDUX={
  value:'',
};

export function reducer(state=STORE_REDUX,action){
  switch(action.type){
    case 'HAPUS_ALL_VALUE':
      return {...state,value:''};
    case 'TOTAL_ALL_VALUE':
      return {...state,value:eval(state.value)};
    case 'INPUT_VALUE':
      return {...state,value:state.value+=action.value};
    default:
      return {...state};
  }
}