import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
    return (
        
        <div>
            ESTO ES LA NAVBAR.♥ 
            <ul>
                <li>
                 <Link to="/">Click ir a la landingPage.</Link>
                </li>
                <li>
                <Link to="/home">Click  ir a las home.</Link>
                </li>
            </ul>
        </div>
            
    )
}

export default Navbar;
