import React from "react";

class Clascomp extends React.Component{
    render(){
        return(
<div className='box box2'>
        <h1>This is created using Class Component</h1><br/>
        <h3 className='ext'>This is done using external CSS</h3><br/>
        <h3 style={{color:'white'}}> This is done using Inline CSS</h3>
    </div>
        );
    }
}

export default Clascomp;