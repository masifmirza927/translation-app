import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [inputLanguage, setInputLanguage] = useState('');
  const [outputLanguage, setOutputLanguage] = useState('');

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBv3kbb0oyZe3S8m3sE4xJlBmdYL1Fqo38`;

const translateText = async () => {
  try {
    const response = await axios.post(apiUrl, {
      contents: [{
        parts: [{
          text: `"${inputText}" translate to ${outputLanguage}`
        }]
      }]
    });
    
    setOutputText(response.data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error('Translation error:', error);
    setOutputText('Error occurred during translation');
  }
};

  return (
    <>
      <div className='container'>
        <h1>Translation Application</h1>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group mb-3'>
              <label htmlFor='inputText' className=''>Input Text</label>
              <select className='form-control' id='inputText' onChange={(e) => setInputLanguage(e.target.value)}>
                <option>Select Language</option>
                <option>English</option>
                <option>Urdu</option>
              </select>
            </div>
            <div className='mb-3'>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='10'
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group mb-3'>
              <label htmlFor='outputText'>Translate Into</label>
              <select className='form-control' id='outputText' onChange={(e) => setOutputLanguage(e.target.value)}>
                <option>Select Language</option>
                <option>English</option>
                <option>Urdu</option>
              </select>
            </div>
            <div className='mb-3'>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='10'
                value={outputText}
                readOnly
              ></textarea>
            </div>
          </div>
          <div className='col-md-12'>
            <button className='btn btn-primary' onClick={translateText}>
              Translate
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
