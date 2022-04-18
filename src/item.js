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
                    <img src="http://www.partypalooza.com/Merchant2/graphics/00000001/TwoToneFrostyBall.jpg" alt="img"/>
                </div>
                
                <div class="item-info">
                    <h3>Bouncy Ice Balls</h3>
                    <h3>$1.99</h3>
                </div>
                <div className="add">
                    <form>
                    <div className="value-button" id="decrease"  value="Decrease Value" onClick={this.props.decreaseValue}>-</div>
                    <input type="" id="number" value={this.props.value} onChange={this.props.onChange}/>
                    <div className="value-button" id="increase"  value="Increase Value" onClick={this.props.increaseValue}>+</div>
                    </form>
                    <button id='addItem' className="add-to-cart" >Add To Cart</button>
                </div>
            </div>
        )
    }
}

export default Item