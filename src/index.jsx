import React, {useState} from 'react'
import Login from './components/Login'
import CreatePasskey from './components/CreatePasskey'



function Index() {
    const encryptedPasscode = localStorage.getItem("passcode");
    return encryptedPasscode ? <Login/> : <CreatePasskey/>
}

export default Index
