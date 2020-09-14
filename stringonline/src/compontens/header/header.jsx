import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Forside from '../pages/forside';
import SalgsOgHandelbetingelser from '../pages/Salgs- og handelbetingelser';
import Login from '../pages/login';
import Elektriske from '../pages/Elektriske';
import Akustiske from '../pages/Akustiske';
import Billede from '../img/header-bg.png';

export default function header() {
    return (
        <Router>
            <>
      <header>
             <img className="logo" src={Billede} alt=""/>
        <div className="header-links">
     
          <ul>
            <li>
              <Link to="/">Forside</Link>
            </li>
            <li className="SalgsOgHandelbetingelser">
              <Link to="/SalgsOgHandelbetingelser">Salgs Og Handelbetingelser</Link>
            </li>

            <li className="login">
              <Link to="/login">Login</Link>
            </li>
       
          </ul>
   </div>

   
      </header>

      <nav>
          <ul>
        <li className="DropDown">
            {/* Link er react udegave af a  */}
       <Link to="#">Guitarer</Link> 
        <div className="DropContent">
        <Link to="Akustiske"> Akustiske </Link>
        <Link to="Elektriske">Elektriske</Link>
        </div>
        </li>
            <li className="list-inline-item">
              <Link to="Basser">Basser</Link>
            </li>
  
       
          </ul>
        </nav>
      {/* Route bruges til at skifte urlen  */}
      </>
      
      <Route path="/" exact component={Forside} />
      <Route path="/SalgsOgHandelbetingelser" component={SalgsOgHandelbetingelser} />
      <Route path="/login"  component={Login} />
      <Route path="Akustiske" exact component={Akustiske} />
      <Route path="Elektriske" exact component={Elektriske} />
      
    </Router>
    )
}
