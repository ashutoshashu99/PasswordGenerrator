import React, { useRef, useState } from "react";
import { getPasscode } from "../utils";
import App from "../App";
//get passcode   >>>   original passcode   >>>>>>  verify with local >>>> redirect to app
//getPasscode() ////   isValidPasscode()

const SingleInputField = ({ id, onChange, iRef }) => {
  return (

    <input
      type="password"
      ref={iRef} //
      maxLength={1}
      id={id}
      onKeyUp={onChange}
      className="w-12 h-12 rounded-md  m-4 text-center"
    />
  );
};

function Login() {
  const [isValidPsd, setIsValidPsd] = useState(false);
  const [password, setPassword] = useState([]);
  const currentPsd = localStorage.getItem("passcode");
  const loginButtonRef = useRef(null);

  const actualPsd = atob(currentPsd).split(" ")[0];
  console.log(actualPsd);
  const inputFieldsId = [useRef(), useRef() , useRef(), useRef(), useRef()];

  const handleOnChange = (e) => {
    const id = parseInt(e.target.id);
    let refIndex = id;
    const value = e.target.value;
    
    console.log("value: ", value);
    console.log("id ", id);
    
    if(!value && id > 0) refIndex--;
    else refIndex++;
    
    password[id] = value;
    setPassword(password);

    if(id === 4 && value) loginButtonRef.current.focus()
    else inputFieldsId[refIndex].current.focus()
  };

  const login = (
    <>
      <div className="flex  justify-center items-center h-screen w-screen">
        <div className="  h-2/3 w-1/2 rounded-3xl bg-slate-800 shadow-2xl flex flex-col items-center">
          <div className="text-slate-100 font-bold text-2xl mb-6 mt-16">
            Enter Passcode
          </div>
          <div className="mt-11 mb-9">
            {inputFieldsId.map((ref, index) => (
              <SingleInputField id={index} iRef={ref} onChange={handleOnChange} />
            ))}
          </div>
          <button
            className="bg-green-600 text-white px-16 py-2 rounded-lg text-xl font-semibold m-4"
            onClick={() => setIsValidPsd(actualPsd === password.join(""))}
            ref={loginButtonRef}
          >
            Login
          </button>
          <button
            onClick={() => {
              console.log(password);
            }}
            className="text-slate-600 "
          >
            Forgot Passcode ?
          </button>
        </div>
      </div>
    </>
  );
  console.log(isValidPsd);

  return isValidPsd ? <App /> : login;
}

export default Login;
