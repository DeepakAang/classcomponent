import React from 'react';
import Thirdchild from './Thirdchild';
class Third extends React.Component{
    state={
        count:99,
        count1:100
    }
    increment=()=>{
        this.setState({count:this.state.count +3},()=>{console.log(this.state.count)})
    }
    decrement=()=>{
        this.setState({count:this.state.count -2},()=>{console.log(this.state.count)})
    }
   /*  otherfun=(val)=>{
        this.setState({count1:val},()=>{console.log(this.state.count1)})
    } */
    otherfun=(value)=>{
        this.setState({count1:value})
    }
    render(){
        return(
        <>
        <div style={{border:'2px solid black',width:'200px'}}>
            <div style={{backgroundColor:this.state.count1 < 100?'yellow': this.state.count1 > 110  ? 'violet': 'white'  , padding:'20px'}}>
            <div>Count:{this.state.count} </div>
            <div><button onClick={this.increment}>+</button><button onClick={this.decrement}>-</button></div>
            </div>
            </div>
            <Thirdchild div={this.state.count} childnum={this.otherfun}/>
        </>
        )
    }
}
export default Third