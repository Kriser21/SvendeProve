
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
<h2>Kasse</h2>
   <p>Fakturerings- & leveringsadresse</p>
</span>
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

</span>

<span>
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

<input  type="submit" value="BETAL"/> <br/><br/>

</span>
</form> 
                </>
            )}
   
    </div>
  );
}