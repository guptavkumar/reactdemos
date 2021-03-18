
import React, { Component } from 'react';

class Counter extends Component {
     
style = {
    fontSize:20,
    fontWeight:"bold"
}
      
    
    render() {
const {onIncrement,counter,onDelete} = this.props;
return (
    
     <div>
         <span style={this.style} className="badge badge-primary m-2">{this.formatCount()}</span>
        
         <button onClick={()=>onIncrement(counter)} className="btn btn-secondary btn-sm">Increment</button>
         <button onClick={()=>onDelete(counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
         <br/>
         </div>
         );
    }

    formatCount()
    {
        const {value: value} = this.props.counter;
      
        return this.props.counter.value === 0 ? "Zero":this.props.counter.value;
    }

    componentWillUnmount()
    {
        console.log("Counter deleted");
    }
}
 
export default Counter;
















