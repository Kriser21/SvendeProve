import React, { useState, useEffect, useContext } from 'react';
import { KurvTilføj } from '../contexts/avv';


const Fetch = () =>{
const { apple, setAppel } = useContext (KurvTilføj);
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/stringsonline/products/group/2', {
method:'GET',
redirect: 'follow',
})
            
.then((res) => res.json())
.then((data) => setApiData(data))
.catch((err) => console.log(err));        
}
});

console.log(apple);

const avv = (produkter) => {
    setAppel(apple.concat(produkter));
}

let home =
apiData&&
    apiData.products.slice(0, 7).map((El) =>{
        console.log (El);
        return(
            <div className="Kiwi">
                <span>
        
            <img src={El.image_fullpath} alt="" />
            </span> 

            <span> 
            <h2>{El.brand}</h2> 
             <h4>{El.name}</h4>
            <p>{El.description_short}</p>
            </span>


            <span className="Fugt">
            <p>{El.price}</p>  
            <button 
                    onClick={() => {
                    avv(El);
                
                    }}>
                        
                    Læg i kurv </button>
            <p>{El.stock}</p>
          </span>  
            </div>
         );
    });



return ( <div className="Text"> 
   <div className="HomeHotel">{home}</div> 
    </div>
    );
};

export default function Home(){
    return(
        <section>
            <div className="forside">
                
                    <Fetch/>

                </div> 

        
        </section>
    );
}