import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='container'>
        <h1>Translation Application</h1>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group mb-3'>
              <label htmlFor='inputText' className=''>Input Text</label>
              <select className='form-control' id='inputText'>
                <option>English</option>
                <option>Urdu</option>
              </select>
            </div>
            <div className='mb-3'>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='6'
              ></textarea>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group mb-3'>
              <label htmlFor='outputText'>Translate Into</label>
              <select className='form-control' id='outputText'>
                <option>Urdu</option>
                <option>English</option>
              </select>
            </div>
            <div className='mb-3'>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='6'
                readOnly
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
