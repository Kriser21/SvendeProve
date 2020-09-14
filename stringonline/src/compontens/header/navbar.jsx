import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Forside from '../pages/forside';



function Routertest() {
  return (
    <Router>
      <header>
        <nav>
         
          <ul>
            <li className="list-inline-item">
              <Link to="Guitarer">Guitarer</Link>
            </li>
  
       
          </ul>
        </nav>
      </header>
      <Route path="/" exact component={Forside} />
  
    </Router>
  );
}
export default Routertest;