import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { useForm} from "react-hook-form";



export default function Kasse() {
    const { register, handleSubmit, errors } = useForm();
    const [ til, setTil ] = useState(false)


const onSubmit = (data) => {
console.log('submit', data);
   setTil(true)
  };


  return (

    <div className="Tilmelding">
          
          
            {til ? (
              <>
              <h1>
              Du er nu tilmeldt Rørdal Run
              </h1>
              <p>
              Mange tak for din tilmelding. Du vil modtage en e-mail fra os med dit løbenummer, samt informationer vedr. Rørdal Run.
              Tak og vi ses!
              </p>
              
              
               </>
            ) : (
                <>
<span className="tilmeld">

<h1>Kasse</h1> <br/>
   <p>Fakturerings- & leveringsadresse</p>
</span> <br/>
<form className="form" onSubmit={handleSubmit(onSubmit)}>
<span>
<label htmlFor="firstname">Nave</label> <br/>
<input type="text" name="firstname" ref={register({
require:' firstname is require',
pattern: {
value: /^[A-Za-z]+$/i,
message: 'no number'
}
})}
/> <br/> <br/>
<label htmlFor="lastname">Efternavn</label> <br/> 
<input type="text" name=" lastname" ref={register({
required:'lastname is require',
pattern:{
value: /^[A-Za-z]+$/i,
message: 'no number'
}
})}/> <br/> <br/>

<label htmlFor="Address"> Gade/vej husnummer </label> <br />
<input
type="text"
name="Adress"
ref={register({
required: 'Adress is required'
})}
/>
<br />
{errors.Addres && <span> {errors.Adress.message} </span>}
<br />
<label htmlFor="ZipCode">Posternummer</label> <br />
<input
type="Number"
name="ZipCode"
ref={register({
required: 'ZipCode is required',
})}
/>
<br />
{errors.ZipCode && <span> {errors.ZipCode.message} </span>}
<br />
<label htmlFor="City">By</label> <br />
<input
type="Text"
name="City"
ref={register({
required: 'City is required',
pattern: {
value: /^[A-Za-z]+$/i,
message: 'no number'
}
})}
/>
<br />
{errors.City && <span> {errors.City.message} </span>}
<br />
<input type="checkbox" name="Kreditkort (MasterCard, VISA" className="boks-tjek"/> 
<label htmlFor="Checboks">Anden leveringsadresse</label>

</span>


<span>
 <p>Email & telefon</p> <br/>
<label htmlFor="email">Email</label> <br />
<input
type="text"
name="email"
ref={register({
required: 'Email is required',
pattern: {
value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
message: 'Invalid email address',
},
})}
/>
<br />
{errors.email && <span> {errors.email.message} </span>}
<br />
<label htmlFor="Telephone ">Telfonnummer</label> <br />
<input
type="Tel"
name="Telephone"
ref={register({
required: 'Telephone  is required'
})}
/>
<br />
{errors.Telephone && <span> {errors.Telephone.message} </span>}
<br />
</span>


<span>
<p>Betalingsmetode</p>

<div class="row">

         
           <span class="icon-container">
          <input type="checkbox" name="Kreditkort (MasterCard, VISA" className="Boks"/>
                <label htmlFor="Checboks">Bankoverførsel</label> <br/>
                <input type="checkbox" name="Kreditkort (MasterCard, VISA" className="Tjek"/>
                <label htmlFor="Checboks">Kreditkort (MasterCard, VISA)</label>
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-cc-mastercard"></i>

            </span> <br/>
          
         
            <input type="text" id="ccnum" name="cardnumber" placeholder="Kortnummer"/> <br/>
          

        <span className="tjek">
            <input type="text" id="expmonth" name="expmonth" placeholder="Måned"/>
            <input type="text" id="expyear" name="expyear" placeholder="År"/>
        </span> <br/>
           
            
            <input type="text" id="cvv" name="cvv" placeholder="CVV"/> <br/>
                 
             
            <input type="text" id="cname" name="cardname" placeholder="Kort indehaver"/> <br/>
              
         


        </div> <br/> 

<Link to="/Ordrebekræftelse"> <button className="TAl">BETAL</button> </Link> <br/><br/>

</span>

</form> 
                </>
            )}
   
    </div>
  );
}