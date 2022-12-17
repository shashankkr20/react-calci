import React from 'react'
import "./header.css"

const Header = (props) => 
{
    return(
        <div className='head'>
            <h2>{props.title}</h2>
            <ul>
                <li>Our product</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>
        </div>
    );
}
  
export default Header;