import React from "react";
class Grandchild extends React.Component{

    state={
        num:50,
        color:"red",
    }
    increment=()=>{
        if(this.state.num <60){
            this.setState({num:this.state.num +5})
        }else{
            alert('Max reached')
        }
    }
    decrement=()=>{
        if(this.state.num > 40){
            this.setState({num:this.state.num -2})
        }else{
            alert('min reached')
        }
    }
    componentDidUpdate(){
        if(this.props.pass==='green' && this.props.childpass==='green')
        {
         setTimeout(()=>{this.setState({color:'red'})},1000)
        }else{
           setTimeout(()=>{this.setState({color:"green"})})
        }
    }
render(){
    return(
        <>
        <div style={{ paddingLeft: "80px" }}>Grand Child</div>
        <div className="top" style={{ backgroundColor: this.props.pass === "green" && this.props.childpass === "green" ? this.state.color: "green" }} >
          Parent Count:{this.state.num}
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
        </>
    )
}
}
export default  Grandchild;