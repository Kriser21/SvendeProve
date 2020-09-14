import React, { useState, useEffect } from 'react';
import Img from '../img/Gutiarer.png';




const Fetch = () =>{
    const [apiData, setApiData]= useState (null);
    useEffect(() => {
    if (!apiData){
    
    
    fetch('https://api.mediehuset.net/stringsonline/', {
    method:'GET',
    redirect: 'follow',
    })
                
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((err) => console.log(err));        
    }
    });
    
    console.log(apiData && apiData);
    
    let home =
    apiData&&
        apiData.productgroups.items[0].subgroups[0].products.slice(0, 4).map((produkter) =>{
            console.log (produkter);
            return(
                <div key={produkter.id}>
                    <img className="IMG" src={produkter.image_fullpath} alt=""/> <br/>
                       <h4>{produkter.name}</h4> 
                  <p>{produkter.description_short}</p> 
                   <span>{produkter.price}</span> <br/>
                    <button >Læg i kurv</button>
                </div>
             );
        });
    
    
    return ( <div> 
        <h2>Kundernes favoritter</h2> <div className="Tekst">{home}</div>
        </div>
        );
    };
    
    export default function Home(){
        return(
            <section>
                <div className="forside">
                    <img src={Img} alt=""/>
                    </div> 

                <Fetch/>


            </section>
        );
    }