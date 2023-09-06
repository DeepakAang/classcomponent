import React from "react";
import Grandchild from "./grandchild";
class Child extends React.Component{
    state={
        num:100,

    }
    increment=()=>{
        if(this.state.num <110){
            this.setState({num:this.state.num+4})
        }else{
            alert('Max is reached')
        }
    }
    decrement=()=>{
        if(this.state.num > 90){
            this.setState({num:this.state.num-3})
        }else{
            alert('Min is reached')
        }
    }
    render(){
        return(
            <>
         <div style={{paddingLeft:'100px'}}>Child</div>
          <div className="top" style={{backgroundColor:this.state.num %2===0 ?'yellow':'green'}}>
            Count:{this.state.num}
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            </div>  
            <Grandchild childpass={this.state.num %2 ===0?"yellow":'green'} pass={this.props.Parent}/>
            </>
        )
    }
}
export default Child;