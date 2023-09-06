import React from "react"; 
class Grand2 extends React.Component{
    state={
        count:0
    }
    render(){
        return(
            <>
            <div style={{border:'2px solid black',width:'200px',padding:'20px'}}>
            <div>Decrement (5)</div>
            <button onClick={this.props.decrem}>-</button>
            </div>
            </>
        )
    }
}
export default Grand2