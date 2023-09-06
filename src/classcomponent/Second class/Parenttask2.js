import React from 'react';
import Child2 from './Child2';
import Grand2 from './Grandchild2';
class Parent2 extends React.Component{
    state={
        count:10
    }
    increment=()=>{
        if(this.state.count <50){
            this.setState({count:this.state.count + 7},
                ()=>{console.log(this.state.count)})
        }else{
            alert('Max Reached')
        }
    };
    decrement=()=>{
        if(this.state.count >- 50){
            this.setState({count:this.state.count -5},
                ()=>{console.log(this.state.count)})
        }else{
            alert('Max number Exceed')
        }
    }
render(){
    return(
        <>
        <div style={{border:'2px solid black',width:'200px',padding:'20px'}}>
        Increment (7)
        <button onClick={this.increment}>+</button>
        
        </div>
        <Child2 Count={this.state.count}/>
        <Grand2 decrem={this.decrement}/>
        </>
    )
}
}
export default Parent2