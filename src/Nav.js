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
                <Link to="/"  className='header-links'>
                    <h3 id='logo' data-page="home">I Like Purple</h3>
                </Link>
                <ul className='nav-links'>
                    <Link to="/shop"  className='header-links'>
                        <li data-page="shop">Shop</li>
                    </Link>
                    <li id='cart'>Cart : {this.props.itemCount}</li>
                </ul>
            </nav>
        )
    }
}
  
  export default Nav;