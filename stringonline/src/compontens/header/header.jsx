import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Forside from '../pages/forside';
import SalgsOgHandelbetingelser from '../pages/Salgs- og handelbetingelser';
import Login from '../pages/login';
import Elektriske from '../pages/Elektriske';
import Akustiske from '../pages/Akustiske';
import Billede from '../img/header-bg.png';
import Kurv from '../pages/kurv'
import Kasse from '../pages/Kasse';
import Ordrebekræftelse from '../pages/Ordrebekræftelse';
import Akai from '../pages/Akai';
import Cort from '../pages/Cort';
import Epiphone from '../pages/Epiphone'


// 
export default function Header() {
  const { register, handleSubmit } = useForm();
  const [serchtWord, setSerchtWord] = useState('');
  const [apiData, setApiData] = useState(null);
  const [auth, setAuth] = useState(false);

useEffect(() => {
   // vise den er true så må den godt køre 
    if (auth === true) {
       //sprøg om api date er tomt 
      if (!apiData) {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        fetch('https://api.mediehuset.net/rordal/search/' + serchtWord, {
          method: 'GET',
          headers: fetchHeaders,
          redirect: 'follow',
        })
          .then((res) => res.json())
          .then((data) => setApiData(data))
          .catch((err) => console.log(err));
      }
    }
    console.log('søg', apiData);
  });
  const onSubmit = (data) => {
    setSerchtWord(data.sertch);
    setApiData('');
    setAuth(true);
  }


    return (
        <Router>
            <>
            {/* Det er her er hcor jeg har min header */}
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

{/* Det her er mine i ikoner og text ved siden af de  */}
<div className="Sog">
<span><i class="fas fa-envelope">  SALES@STRINGSONLINE.COM</i> </span>
<span><i class="fas fa-phone-alt">  +45 98 12 22 68</i></span>
<Link to="/Kurv"><i class="fas fa-shopping-basket"></i></Link>
   <form onSubmit={handleSubmit(onSubmit)} >
       
        <input
          type="text"
          placeholder="søg"
          name="sertch"
          ref={register}
        />
        
        <button type="submit">
        <i class="fas fa-arrow-right"></i>
        </button>
      </form>
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

            <li className="list-inline-item">
              <Link to="Handmade">Handmade</Link>
            </li>
       
            <li className="list-inline-item">
              <Link to="Keyboards">Keyboards</Link>
            </li>
           
            <li className="list-inline-item">
              <Link to="Trommer">Trommer</Link>
            </li>
            <li className="list-inline-item">
              <Link to="Percussion">Percussion</Link>
            </li>
            <li className="list-inline-item">
              <Link to="StrygBlæs">Stryg & Blæs</Link>
            </li>
             <li className="DropDown">
              <Link to="Brands">Brands</Link>
              <div className="DropContent">
                <Link to="Akai">Akai</Link>
                <Link to="Cort ">Cort</Link>
                <Link to="Epiphone">Epiphone</Link>
               
              </div>
            </li>

          </ul>
        </nav>
   
      </>  
       {/* Route bruges til at skifte urlen  */}
      
      <Route path="/" exact component={Forside} />
      <Route path="/SalgsOgHandelbetingelser" component={SalgsOgHandelbetingelser} />
      <Route path="/login"  component={Login} />
      <Route path="/Akustiske" exact component={Akustiske} />
      <Route path="/Elektriske" exact component={Elektriske} />
      <Route path="/Kurv" exact component={Kurv} />
      <Route path="/Kasse" exact component={Kasse} />
      <Route path="/Ordrebekræftelse" exact component={Ordrebekræftelse} />
      <Route path="/Akai" exact component={Akai}/>
      <Route path="/Cort" exact component={Cort}/>
      <Route path="/Epiphone" exact component={Epiphone}/>
    
     
    </Router>
    )
}
