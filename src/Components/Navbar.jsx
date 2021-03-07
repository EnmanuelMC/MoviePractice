import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
    return (
            <nav class="navbar navbar-light bg-light"  style={{marginBottom: 2 + 'rem'}}>
            <div class="container-fluid">
              <Link  to="/" class="navbar-brand">landingPage</Link>
                <Link to="/home" class="navbar-brand">home</Link>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Elige tu pelicula" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
            </div>
          </nav>
            
    )
}

export default Navbar;
