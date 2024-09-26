import { useState, useCallback, useEffect } from 'react'




function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()
  const [submit, setSubmit] = useState(false)
  const copyBackground = "bg-blue-600"

  const passwordGenerate = useCallback(() => {
    let passkey = ''
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let nums = '1234567890'
    let character = '!@#$%^&*()'

    if (numberAllowed) string += nums;
    if (charAllowed) string += character;

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * string.length + 1)
      passkey += string.charAt(index)
    }

    setPassword(passkey);

  }, [length, numberAllowed, charAllowed, setPassword])

  function copyPassToClip() {
    window.navigator.clipboard.writeText(password)
    alert(`Password copied to clipboard`)
  }
  
  
  useEffect(() => {
    return  passwordGenerate()
  }, [submit])

  

  return (
    <>
      <div className='bg-gray-600 max-w-md w-full mx-auto  shadow-md rounded-lg bg-gray px-7 py-7 my-8' >
        <h1 className='text-2xl text-center text-white mb-5'>Password Generator</h1>
        <div className='flex shadow-lg mb-4 overflow-hidden rounded-lg'>
         
          <input
            className='w-full outline-none px-3 mt cursor-default'
            type="text"
            placeholder={password}
            readOnly />
          <button
            //  copy button here
            className='bg-blue-600 text-white shrink-0 text-xs px-3 py-0.5 outline-none'
            onClick={copyPassToClip}
            >Copy</button>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={0}
            max={30}
            value={length}
            onChange={(event) => { setLength(event.target.value) }}

          />
          <label className='text-white text-sm'>Length:{length}</label>

          <input

            type="checkbox"
            defaultChecked={numberAllowed}
            id='numbAllow'
            onChange={() => { setNumberAllowed((change) =>  !change ) }}
          />
          <label htmlFor="numbAllow" className='text-white'>Number</label>

          <input

            type="checkbox"
            defaultChecked={charAllowed}
            id='char'
            onChange={() => {setCharAllowed((change) =>  !change )}}
          />
          <label htmlFor="char" className='text-white'>Character</label>

        </div>
        <div className='flex flex-col items-center mt-3'>
          <button 
            className='bg-blue-600 text-white shrink-0 px-3 py-0.5 outline-none rounded-lg flex items-center text-lg shadow-xl'              
            onClick={()=>{setSubmit((change)=> !change )}}
          >Generate</button>
        </div>

      </div>      
    </>
  )
}

export default App
