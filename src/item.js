import React, { Component } from 'react';
import './Item.css'

class Item extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="item">
                <div className="item-img">
                    <img src={this.props.img} alt="img"/>
                </div>
                
                <div class="item-info">
                    <h3>{this.props.name}</h3>
                    <h3>${this.props.price}</h3>
                </div>
                <div className="add">
                    <form>
                    <div className="value-button decrease"   value="Decrease Value" onClick={this.props.decreaseValue} data-id={this.props.data}>-</div>
                    <input type="" className="number" id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>
                    <div className="value-button increase"   value="Increase Value" onClick={this.props.increaseValue} data-id={this.props.data}>+</div>
                    </form>
                    <button id='addItem' className="add-to-cart" data-pos={this.props.pos} >Add To Cart</button>
                </div>
            </div>
        )
    }
}

export default Item