import React, { Component } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';


  class Nav extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <nav>
                <div className='purple-links'>
                    <Link to="/ecommerce-site">
                        <h3 id='logo'>Purple Gallery</h3>
                    </Link>
                    <Link to="ecommerce-site/shop" >
                            <h3 >Purple Shop</h3>
                    </Link>
                </div>
                
                <ul className='nav-links'>
                    <li id='cart'>Cart : {this.props.itemCount}</li>
                </ul>
            </nav>
        )
    }
}
  
  export default Nav;