
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const numbers = '0123456789'
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const symbolList = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"

    const [password, setPAssword]=useState('')
     const [passwordLength, setPasswordLength] = useState(8)
    const [includeUppercase, setIncludeUppercase] = useState(false)
    const [includeLowercase, setIncludeLowercase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)

    const GeneratePassword=(e)=>{
      if(!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols){
        alert("Atleast select one option")
      }
      let cList =''
      
      if(includeUppercase){
        cList = cList + lowerCaseLetters
      }
      if(includeLowercase){
        cList = cList + upperCaseLetters
      }
      if(includeNumbers){
        cList = cList + numbers
      }
      if(includeSymbols){
        cList = cList + symbolList
      }
      setPAssword(createPassword(cList))
    }

    const createPassword = (cList) =>{
      let password =''
      const cListLength= cList.length

      for(let i=0; i<passwordLength;i++){
        const cIndex = Math.round(Math.random()*cListLength)
        password= password+cList.charAt(cIndex)
      }
      return password
    }

  return (
    <div className="App">
      <div className='container'>
          <h2 className='Header'>Password Generator</h2>
          <div className='passwordDisplay'>
            <h3 className='textbox'>{password}</h3>
          </div>

          <div className='formG'>
            <label> Select password Length</label>
            <input 
            defaultValue={passwordLength}
            onChange={(e)=>setPasswordLength(e.target.value)}
            type='number'
            min='8'
            max='20'/>
          </div>

          <div className='cbox-container'>
          <div className='cbox'>
            
            <input
            checked={includeUppercase}
            onChange={(e)=> setIncludeUppercase(e.target.checked)}
            type="checkbox"
            />
            <label >Include Upper Case Letters</label>
          </div>

          <div className='cbox'>
            
            <input
            checked={includeLowercase}
            onChange={(e)=> setIncludeLowercase(e.target.checked)}
            type="checkbox"
            />
            <label >Include Lower Case Letters</label>
          </div>

          <div className='cbox'>
            
            <input
            checked={includeNumbers}
            onChange={(e)=> setIncludeNumbers(e.target.checked)}
            type="checkbox"
            />
            <label >Include Numbers</label>
          </div>

          <div className='cbox'>
            
            <input
            checked={includeSymbols}
            onChange={(e)=> setIncludeSymbols(e.target.checked)}
            type="checkbox"
            />
            <label >Include Symbols</label>
          </div>
          </div>
          <button onClick={GeneratePassword} className='generator'>Generate Password</button>
      </div>
    </div>
  );
}

export default App;
