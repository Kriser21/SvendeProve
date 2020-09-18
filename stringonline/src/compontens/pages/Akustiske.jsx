import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { KurvTilføj } from '../contexts/avv';


const Fetch = () =>{
const { apple, setAppel } = useContext (KurvTilføj);
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/stringsonline/products/group/3', {
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
    apiData.products.slice(0, 7).map((news) =>{
        console.log (news);
        return(
            <div className="Banana">
                <span>
           
            <img src={news.image_fullpath} alt="" />
            </span>

            <span>

            <h2>{news.brand}</h2> 
             <h4>{news.name}</h4>
            <p>{news.description_short}</p>
            </span>


            <span>
            <p>{news.stock}</p>
            <p>{news.price}</p>  
            <button 
                    onClick={() => {
                    avv(news);
                
                    }}>
                        
                    Læg i kurv </button>
                    
          </span>  
            </div>
         );
    });



return ( <div > 
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