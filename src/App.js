import { useState } from 'react';
import Clascomp from './components/Clascomp';
import Funcomp from './components/Funcomp';

import './style.css';

function App() {
  const [FnData , setData]=useState()
  const [cData,setData2]=useState()
  return (
    <div className='app'>
      <h1>Styling using Functional and Class component</h1>
      <br/><br/><br/>
<button className='func'  onClick={()=>setData(true)}>To see styling in Functional Component</button>
<button className='clas' onClick={()=>setData2(true)} >To see styling in Class Component</button>

{FnData&&<Funcomp/>}
{cData&&<Clascomp/>}

    </div>
  );
}

export default App;