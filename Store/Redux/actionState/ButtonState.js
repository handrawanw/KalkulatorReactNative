export let STORE_REDUX={
  value:'',
};

export function reducer(state=STORE_REDUX,action){
  switch(action.type){
    case 'HAPUS_ALL_VALUE':
      return {...state,value:''};
    case 'TOTAL_ALL_VALUE':
      try{
        let total="";
        if(state.value.includes("x")){
          total=state.value.replace(/x/g,"*");
          return {...state,value:eval(total)};
        }
        return {...state,value:eval(state.value)};
      }catch(e){
        return {...state,value:'INPUT SALAH'};
      }
    case 'INPUT_VALUE':
      return {...state,value:state.value+=action.value};
    default:
      return {...state};
  }
}