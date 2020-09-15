import React, { useState, useEffect } from 'react';
//import react hook form
import { useForm } from 'react-hook-form';
export default function ReactForm() {
  //indstiller the hook fra useForm
  const { register, handleSubmit, errors } = useForm();
  const [apiData, setApiData] = useState('');
  // indstilling af brugernavn og adgangskode, så det kan hentes fetch
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [token, setToken] = useState('');
  const [isToken, setIsToken] = useState(false);
  const [findError, setFindError] = useState(false);
  const [isLocalStorage, setIsLocalStorage] = useState(false);
  //den spørg om torken er underfiend og visen den er undefinde så fjern den token
  if (localStorage.getItem('token') === undefined) {
    localStorage.removeItem('token');
    //viser der er en token så går den og spørg om om hook false så gå den viser og vise de true så gøre den ikke noget 
  } else if (localStorage.getItem('token')) {
    if (isLocalStorage === false) {
      setIsLocalStorage(true);
      setIsToken(true);
    }
  }

  
  useEffect(() => {
      // vise den er true så må den godt køre 
    if (auth === true) {
        //sprøg om api date er tomt 
      if (!apiData) {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        let urlencoded = new URLSearchParams();
        urlencoded.append('username', userName);
        urlencoded.append('password', userPassword);
        fetch('https://api.mediehuset.net/token', {
          method: 'POST',
          headers: fetchHeaders,
          body: urlencoded,
          redirect: 'follow',
        })
          .then((res) => res.json())
          .then((data) => setApiData(data))
          .catch((err) => console.log(err));
      }

      // den kalder clear
      setTimeout(Clear, 3000);
      // den setter token 
      setToken(apiData && apiData.access_token);
        //Vise jeg skriver forkert så setter den fined erro true 
      if (token === undefined) {
        setFindError(true);
//vise den er der så må den log ind 
      } else if (apiData && apiData.access_token) {
        setIsToken(true);
        // localStorage.setItem('token', JSON.stringify(apiData && apiData));
        localStorage.setItem('token', token);
      }
    }
    //det et lop der køre hele tiden
  }, [auth, apiData, token, userName, userPassword]);
  //fjer username og password 
  const Clear = () => {
    setUserName('');
    setUserPassword('');
  };
  //Hvis  finderror er true så viser den worng username or password eller viser den ikke noget 
  const ShowError = () => {
    return (
      <>
        {findError ? (
          <>
            <p>worng username or password</p>
          </>
        ) : (
          <></>
        )}
      </>
    );
  };

  //når brugeren submiter resetter den alt og søger for den kan køre
  const onSubmit = (data) => {
    setUserName(data.username);
    setUserPassword(data.password);
    setApiData('');
    setAuth(true);
    setFindError(false);
    setIsToken(false);
  };

  
  return (
    <section>
        {/* spørg om  isToken er true. Hvis ja viser den at du er log ind og en kanp til at kog ude */}
      {isToken ? (
        <>
          <p>du er logget in</p>
          <button
            onClick={() => {
              setApiData('');
              setAuth(false);
              setFindError(false);
              setIsToken(false);
              setToken('');
              setIsLocalStorage(false);
              localStorage.removeItem('token');
            }}
          >
            log out
          </button>
        </>
      ) : (
        <>

          <form onSubmit={handleSubmit(onSubmit)}>
            <ShowError />
            <label htmlFor="username">User name:</label> <br />
            <input
              type="text"
              placeholder="user name"
              name="username"
              ref={register({
                required: 'User name is required',
              })}
            />
            <br />
            {/* vise brugen ikke  skriven noegt så køre den en fejle meddeslse  */}
            {errors.username && <span> {errors.username.message} </span>}
            <br />
            <label htmlFor="password">Password:</label> <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              ref={register({
                required: 'password is required',
              })}
            />
            <br />
             {/* vise brugen ikke  skriven noegt så køre den en fejle meddeslse  */}
            {errors.password && <span> {errors.password.message} </span>}
            <br />
            <input type="submit" value="Log ind" />
        
          </form>
        </>
      )}
    </section>
  );
}