
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
        render() {
            console.log("Counter component rendered");
            const {counters,onIncrement,onReset,onDelete}=this.props;
        return ( 
             <div>
                 
                 <button onClick={onReset} className="btn btn-primary btn-sm btn-m2">Reset</button>
                 {counters.map(counter=><Counter 
                 onDelete={onDelete} key={counter.id} counter={counter} onIncrement = {onIncrement}/>)}
             </div>);
    }

    componentDidMount()
    {
       
        console.log ("Counter com ponent mounted");
    }

    constructor()
    {
       super();
        console.log("counter's constructor called");
    }

    componentDidUpdate (pp, ps)
    {
console.log({pp});
console.log({ps});
    }
}
 
export default Counters;
