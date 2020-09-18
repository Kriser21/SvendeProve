import React, { useState, useEffect } from 'react';

const Fetch = () =>{
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/stringsonline/brands/17', {
method:'GET',
redirect: 'follow',
})
            
.then((res) => res.json())
.then((data) => setApiData(data))
.catch((err) => console.log(err));        
}
});

console.log(apiData && apiData);

let Akai =
apiData&&
    apiData.item.products.slice(0, 3).map((Akai) =>{
        console.log (Akai);
        return(
            <div className="Pære">
            <img src={Akai.image_fullpath} alt="" />
            <span>
            <p>{Akai.name}</p>
            <p>{Akai.price}</p>
          </span>
            </div>
         );
    });



return ( <div className="Text"> 
   <div className="Home">
  <img className="img" src={apiData && apiData.item.image_fullpath} alt=""/>
    <h2>{apiData && apiData.item.title}</h2>
    <p>{apiData && apiData.item.description}</p>

  {Akai}
   </div> 
    </div>
    );
};

export default function Akai(){
    return(
        <section>
        
            <Fetch/>
        </section>
    );
}