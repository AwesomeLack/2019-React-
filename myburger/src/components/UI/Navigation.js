import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

const Navigation =()=>{
    return(
        <div className="Nav">
            <center>
              <ul>
                <li><Link to="/">Burger Builder</Link></li>
                <li><Link to="/Orders">Orders</Link></li>
              </ul>
          </center>
        </div>
    )
}
export default Navigation;