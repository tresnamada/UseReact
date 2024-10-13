import { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'

function App() {
  const [panjang, SetPanjang] = useState(9)
  const [chatAllowed, SetChatAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const buatPassword = () => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (chatAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+"
    }

    for (let i = 1; i <= panjang; i++) {
      let char = str[Math.floor(Math.random() * str.length)]
      pass += char
    }
    setPassword(pass)
  }


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()

  }


  useEffect(() => {
    buatPassword()
  }, [panjang, chatAllowed, charAllowed])




  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white'>
        <h1 className="text-3xl font-bold text-white py-3">
          Random Password
        </h1>
        <div className='flex py-3 gap-2'>
          <input
            type="text"
            value={password}
            className='outline-none text-gray-700 w-full py-1 px-3 rounded-md'
            placeholder='Password'
            ref={passwordRef}
            readOnly
          />
          <button

            onClick={copyPasswordToClipboard}
            className='bg-white px-3 rounded-lg'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-2'>
            <input type="range"
              min={6}
              max={256}
              value={panjang}
              className='cursor-pointer'
              onChange={(e) => SetPanjang(e.target.value)}
              name=""
              id="" />
            <span>Panjang: {panjang}</span>
          </div>

          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={chatAllowed}
              value={panjang}
              onChange={() => SetChatAllowed((prev) => !prev)}
            />
            <span>Number:{panjang}</span>
          </div>

          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              value={panjang}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
