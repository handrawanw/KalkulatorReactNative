
export const HAPUS_VALUE=(state)=>({
  type:"HAPUS_ALL_VALUE",
});

export const TOTAL_VALUE=(state)=>{
  return {
    type:"TOTAL_ALL_VALUE",
  }
}

export const INPUT_VALUE=(state)=>({
  type:"INPUT_VALUE",
  value:state,
});
