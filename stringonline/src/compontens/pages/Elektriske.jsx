import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Fetch = () =>{
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

console.log(apiData && apiData);

let home =
apiData&&
    apiData.products.slice(0, 7).map((news) =>{
        console.log (news);
        return(
            <div className="Banana">
            <p>
            <img src={news.image_fullpath} alt="" />
            <span>{news.price}</span> 
            <span>{news.name}</span>
            <span>{news.description_short}</span>
        <span>{news.stock}</span>
        <span>{news.brand}</span>
        <Link to="/"> <button>Læg i kurv</button></Link>
            </p>
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