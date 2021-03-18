
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  
  state = {  
    counters :[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:2},
        {id:5,value:0}]
}

handleDelete= counterId=>
{
   const updatedCounters = this.state.counters.filter(counter=>counter.id!==counterId);
   this.setState({counters: updatedCounters});
};

handleIncrement = counter=>
{
    const countersCopy = [...this.state.counters];
    
    const index = countersCopy.indexOf(counter);
    
    countersCopy[index] = {...counter};
   
    countersCopy[index].value++;
           this.setState({counters:countersCopy});
   
}

HandleReset =()=>
{
  console.log("Handle reset triggered");
    const resetCounters = this.state.counters.map(
        c=>{
            c.value = 0 ;
            return c;
        });

        this.setState({counters:resetCounters});
}
 
  render() { 
    return (
     <React.Fragment>
      <NavBar  totalCounters = {this.state.counters.filter(c=>c.value>0).length}/>
      <Counters counters={this.state.counters} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onReset={this.HandleReset}/>
      </React.Fragment>
      );
  }
}
 
export default App;
