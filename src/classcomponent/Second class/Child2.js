import React from "react";
class Child2 extends React.Component{
    state={
        count:0
    }
    increment=()=>{
        if(this.state.count <100){
            this.setState({count:this.state.count +1},()=>{console.log(this.state.count)})
        }else{
            alert('Max Number Exceed')
        }
    };
    decrement=()=>{
        if(this.state.count >-100){
            this.setState({count:this.state.count -1},()=>{console.log(this.state.count)})
        }else{
            alert('Min Number Exceed')
        }
    }
    render(){
        return(
            <>
            <div style={{border:'2px solid black',width:'200px',padding:'20px'}}>
                Count :{this.state.count + this.props.Count}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
            </>
        )
    }
}
export default Child2