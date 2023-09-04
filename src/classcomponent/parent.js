import React from 'react'
import Child from './child'
class Parent extends React.Component{

    state={
        num:0,
        color:'red'
    }

    increment=()=>{
        if(this.state.num <10){
            this.setState({num:this.state.num +1},()=>{console.log(this.state.num)})
        }else{
            alert("Max exceed")
        }
    }
    decrement=()=>{
        if(this.state.num >-10){
            this.setState({num:this.state.num -1},()=>{console.log(this.state.num)})
        }else{
            alert("Min Exceed")
        }
    }
    render(){
        return(
            <>
            <div style={{paddingLeft:'100px'}}>Parent</div>
            <div className='top' style={{backgroundColor:this.state.num %2===0 ?'green':this.state.color}}>
            Count:{this.state.num}
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            </div>
            <Child Parent={this.state.num %2===0 ?'green':'red'}/>
            </>
        )
    }
}
export default Parent