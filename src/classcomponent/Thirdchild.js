import React from "react";
class Thirdchild extends React.Component{

    state={
        count:100
    }
       increment=()=>{
        this.setState({
            count:this.state.count+5,
            
        },()=>{console.log(this.state.count)
        this.props.childnum(this.state.count)
        })
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-5,
            
        },()=>{console.log(this.state.count)
            this.props.childnum(this.state.count)
        })
    }
    render(){
        return(
            <>
            <div style={{border:'2px solid black',width:'200px'}}>
             <div style={{backgroundColor:this.props.div %5===0 ?'blue': this.state.count %2===0?'green':'red',padding:'20px'}}>
            <div>Count:{this.state.count}</div>
            <div><button onClick={this.increment}>+</button><button onClick={this.decrement}>-</button></div>
            </div>
            </div>
            </>
        )
    }
}
export default Thirdchild