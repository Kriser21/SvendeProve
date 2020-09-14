import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Forside from '../pages/forside';
import Elektriske from '../pages/Elektriske';
import Akustiske from '../pages/Akustiske';



function Routertest() {
  return (

    // Router bruges til at rendere en ny side 
    <Router>
      <header>
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
      </header>
      {/* Route bruges til at skifte urlen  */}
      <Route path="/" exact component={Forside} />
      <Route path="Akustiske" exact component={Akustiske} />
      <Route path="Elektriske" exact component={Elektriske} />
    </Router>
  );
}
export default Routertest;