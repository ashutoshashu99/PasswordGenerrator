const decrypt = (ep)=> atob(ep).split(" ");

const getPasscode = ()=>{
    return decrypt(localStorage.getItem("passcode"))[0];
}

export {getPasscode}