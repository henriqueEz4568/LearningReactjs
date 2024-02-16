import React, { useState } from 'react';
/*
export function Contador(){
const [contador,setContador] =useState(0)
    return(
<div>
<p>voce clicou {contador} vezes</p>
<button onClick={()=>setContador(contador+1)}>


clique Aqui
</button>


</div>

    )
}*/

export function Contador(){
const[inputa,setInput]=useState('vai se foder')


 return(<div>
<input
onChange={(e)=>setInput(e.target.value)}
></input>
<p> esse {inputa}</p>


</div>
 )   
}