import { uploadFile } from './services/api';
import './App.css';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [file, setFile] = useState('');
  const [result,setResult] = useState('');
  const fileInputRef = useRef();


  useEffect(()=>{
    const getImage = async ()=>{
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file",file);

       let response = await uploadFile(data);
       setResult(response.path);
      }
  }
  getImage();
  },[file])
  
  const onUploadClick=()=>{
    fileInputRef.current.click();
  }

  const onCopyClick=()=>{
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(result);
  }

  console.log(file);
  return (
    <div className = "container">
    
        <div className='wrapper'>
          <h1>Simple File Sharing</h1>
          Upload and Share the Download Link

          <button onClick={()=>onUploadClick()}>Upload</button>
          <input type="file"
              ref={fileInputRef}
              style={ {display:'none'}}
              onChange={(e) => setFile(e.target.files[0])}
          />

          <a href={result} target = "_blank" rel="noreferrer">{result}</a>

          <button onClick={()=>onCopyClick()}>Copy</button>

        </div>
    </div>
  );
}

export default App;
