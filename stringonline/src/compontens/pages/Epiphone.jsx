import React, { useState, useEffect } from 'react';

const Fetch = () =>{
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/stringsonline/brands/3', {
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
    apiData.item.products.slice(0, 4).map((news) =>{
        console.log (news);
        return(
            <div className="Pære">
            <img src={news.image_fullpath} alt="" />
            <span>
            <p>{news.name}</p>
            <p>{news.price}</p>
          </span>
            </div>
         );
    });



return ( <div className="Text"> 
   <div className="HomeHotel">
   <img className="img" src={apiData && apiData.item.image_fullpath} alt=""/>
    <h2>{apiData && apiData.item.title}</h2>
    <p>{apiData && apiData.item.description}</p>
  {home}
   </div> 
    </div>
    );
};

export default function Home(){
    return(
        <section>
        
            <Fetch/>
        </section>
    );
}