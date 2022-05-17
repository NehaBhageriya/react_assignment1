import React from 'react'

const Funcomp = () => {
  return (
    <div className='box box1'>
        <h1>This is created using Functional Component</h1><br/>
        <h3 className='ext'>This is done using external CSS</h3><br/>
        <h3 style={{color:'white'}}> This is done using Inline CSS</h3>
    </div>
  )
}

export default Funcomp;