import React, { useState, useEffect } from 'react';

const Fetch = () =>{
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/stringsonline/brands/13', {
method:'GET',
redirect: 'follow',
})
            
.then((res) => res.json())
.then((data) => setApiData(data))
.catch((err) => console.log(err));        
}
});

console.log(apiData && apiData);

let Cort =
apiData&&
    apiData.item.products.slice(0, 1).map((Cort) =>{
        console.log (Cort);
        return(
            <div className="Pære">
            <img src={Cort.image_fullpath} alt="" />
            <span>
            <p>{Cort.name}</p>
            <p>{Cort.price}</p>
          </span>
            </div>
         );
    });



return ( <div className="Text"> 
   <div className="HomeHotel">
<h2>{apiData && apiData.item.title}</h2>
<p>{apiData && apiData.item.description}</p>
<img src={apiData && apiData.item.image_fullpath} alt=""/>

  {Cort}
   </div> 
    </div>
    );
};

export default function Cort(){
    return(
        <section>
        
            <Fetch/>
        </section>
    );
}