import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { KurvTilføj } from '../contexts/avv';



export default function Kurv() {
    const { apple, setAppel } = useContext (KurvTilføj);
    console.log('test',apple);
    return (
        <section>

<h2>Indkøbskurv</h2>
            <div className="tilføj">
            {apple.map (kurv =>{

return(
    <>
 
    
    <p key={kurv.id}>
            <img src={kurv.image_fullpath} alt=""/>
    <span>{kurv.name}</span> 
    <span>{kurv.price}</span> 
<span>{kurv.description_short}</span>

    </p> 

    </>
)
                
            })}


            </div>
            <br/>
<button className="Klik"> <Link to="/Kasse"> TIL KASSEN</Link></button>  

        </section>
    )
}
