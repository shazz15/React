import React, { Component } from 'react';
import './App.css';
import TodoItems from "./TodoItems";
import "./TodoList.css";

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      items:[]
    };

    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  }
  addItem(e){
if(this.inputElement!==""){
  var newItem={
    text:this.inputElement.value,
    key: Date.now()
  };

  this.setState((prevState)=>{
    return{
      items: prevState.items.concat(newItem)
    };
  });
}
this.inputElement.value="";


  }

  deleteItem(key){
    var filteredItems=this.state.items.filter(function(item){
   return (item.key!==key)
    });
    this.setState({
      items:filteredItems
    });
  }


  render() {
     return(
      <div className="main">  
      <div className="header">
      <div >
        <input  ref={(a)=>this.inputElement=a} placeholder="enter list task">
        </input>
        <button onClick={this.addItem} type="submit">submit</button>
      </div>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
        </div>
      );
  }
}

export default App;