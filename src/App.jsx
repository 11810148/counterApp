
import { useState } from 'react';
import './App.css';

function App() {

    var [count, setcounter ]=useState(0);

     var add=()=>{
         setcounter(count+1);
     }
var minus=()=>{

setcounter(count-1);

}

const reset=()=>{
 
setcounter(count-count);

}



  return (
    <div className="outer">
   

       <h1>Counter Apps</h1>
       {/* <span>Counter_output</span> */}
   <div className='counter'>
      <button className='btn'onClick={add} >+</button>

      

<input type={'number'} id='output'   value={count} ></input>

      <button className='btn' id='btn2' onClick={minus} >-</button>
      <br></br>
      <button className='btn' id='btn3' onClick={reset}>Reset</button>


   </div>

     <h2>Developed By:-</h2>
     <p    >Sonu Kumar Singh</p>

    </div>
  );







}







// export default App;
export default App;

