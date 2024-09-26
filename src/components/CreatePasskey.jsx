import React, { useState } from 'react'
import App from '../App';

const encrypt = (passcode) => btoa(passcode + " CAB");

const decrypt = (ep)=> atob(ep).split(" ")[1];

function CreatePasskey() {
    const encryptedPasscode = localStorage.getItem("passcode") || "";
    const initialState = decrypt(encryptedPasscode) === "CAB" ? true : false;
    const [isLoggedin, setIsloggedin] = useState(initialState);
    
    const submitForm = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const { passcode, checkPasscode, hint } = Object.fromEntries(formData)

        console.log(passcode);
        console.log(checkPasscode);

        if (passcode == checkPasscode) {

            localStorage.setItem("passcode", encrypt(passcode))
            localStorage.setItem("hint", hint)
            setIsloggedin(true)
        }
    }

    const signup = (
        <>
            <div className='flex  justify-center items-center h-screen w-screen'>
                <div className='  h-auto w-1/2 rounded-3xl bg-slate-800 shadow-2xl flex flex-col items-center'>

                    <div className='text-slate-100 font-bold text-2xl  mt-16'>Create Passcode</div>

                    <form onSubmit={submitForm} className='m-5 flex flex-col'>

                        <label htmlFor="passcode" className='text-slate-500 mb-1'>Enter a passcode: </label>
                        <input
                            type="number"
                            max="99999"
                            name='passcode'
                            placeholder='Enter passcode'
                            id='passcode'
                            required
                            className='h-10 w-60 text-center rounded-lg mb-5 shadow-xl' />

                        <label htmlFor="confirmPasscode" className='text-slate-500 mb-1'>Re-enter a passcode: </label>
                        <input 
                            type="number" 
                            max="99999" 
                            name='checkPasscode' 
                            placeholder='Re-enter passcode' 
                            id='confirmPasscode' 
                            required 
                            className='h-10 w-60 text-center rounded-lg mb-5 shadow-xl' />

                        <label htmlFor="confirmPasscode" className='text-slate-500 mb-1'>Hint: </label>
                        <input 
                            type="text" 
                            minLength={4} 
                            name='hint' 
                            placeholder='Hint' 
                            id='hint' 
                            className='h-10 w-60 text-center rounded-lg shadow-xl' />

                        <input type="submit" id='submitForm' className='bg-green-600 text-white px-16 py-2 rounded-lg text-xl font-semibold mt-10 mb-7' />

                    </form>


                </div>

            </div>
        </>
    )
    return isLoggedin ? <App/> : signup
}

export default CreatePasskey
