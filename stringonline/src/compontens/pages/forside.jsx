import React, { useState, useEffect } from 'react';


const Fetch = () =>{
    const [apiData, setApiData]= useState (null);
    useEffect(() => {
    if (!apiData){
    
    
    fetch('https://api.mediehuset.net/stringsonline/productgroups', {
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
        apiData.items.slice(0, 7).map((news) =>{
            console.log (news);
            return(
                <p>
                <span>{news.title}</span>
    
                </p>
             );
        });
    
      return(
          <div>
              {home}
          </div>
      )
    };
    
    export default function Home(){
        return(
            <section>
                <div className="forside">
                
    
                    </div> 
    
                <Fetch/>
            </section>
        );
    }