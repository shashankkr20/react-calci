import React from 'react'
import "./calci.css"
import { useState } from 'react';
const Gap = (props) => {
  const[state,stateset]=useState("");
  const btnhandle = (e) =>
  {
      stateset(state.concat(e.target.name));
  }
  const clear =()=>
  {
      stateset("");
  }
  const del =()=>
  {
    stateset(state.slice(0,-1));
  }
  const evaluate =()=>
  {
      stateset(eval(state).toString());
  }
  return (
    <div className='calci'>
      <input value={state}></input>
      <div className='btn'>
        <button onClick={clear} name=''>C</button>  
        <button onClick={del} name=''>DEL</button>
        <button onClick={btnhandle} name='%'>%</button>
        <button onClick={btnhandle} name='/'>/</button>
        <button onClick={btnhandle} name='7'>7</button>
        <button onClick={btnhandle} name='8'>8</button>
        <button onClick={btnhandle} name='9'>9</button>
        <button onClick={btnhandle} name='*'>*</button>
        <button onClick={btnhandle} name='4'>4</button>
        <button onClick={btnhandle} name='5'>5</button>
        <button onClick={btnhandle} name='6'>6</button>
        <button onClick={btnhandle} name='-'>-</button>
        <button onClick={btnhandle} name='1'>1</button>
        <button onClick={btnhandle} name='2'>2</button>
        <button onClick={btnhandle} name='3'>3</button>
        <button onClick={btnhandle} name='+'>+</button>
        <button onClick={btnhandle} name='0'>0</button>
        <button onClick={btnhandle} name='.'>.</button>
        <button onClick={btnhandle} name='**'>POW</button>
        <button onClick={evaluate} name='='>=</button>
      </div>
    </div>
  );
}

export default Gap