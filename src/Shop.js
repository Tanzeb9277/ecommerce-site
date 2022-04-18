import React, { Component } from 'react';
import Item from "./item";


class Shop extends Component{
  constructor(props){
      super(props)


  }

   

  render(){
      return(
        <div className="shop">
        <Item
          value={this.props.value}
          decreaseValue={this.props.decreaseValue}
          increaseValue={this.props.increaseValue}
          onChange={this.props.onChange}
          />

        
  
        
      </div>
      )}}



  
  export default Shop;