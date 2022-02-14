import { useState } from 'react';
import { FileUploader } from './FileUploader';
import { Preview } from './Preview'
import './GetAgentLogs.css';
import { withRouter } from 'react-router-dom';

function GetAgentLogs() {
    const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
      setFiles(savedFiles)
    };
    return (
      <div className="App">
        <FileUploader onSuccess={onSuccess}/>
        <Preview files={files}/>

      </div>
    );
  }
  
export default withRouter(GetAgentLogs);

//        <ToastContainer />
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'