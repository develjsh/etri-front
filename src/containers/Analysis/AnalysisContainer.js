import React, {useState} from 'react';
import AnalysisForm from "components/Analysis/AnalysisForm";
import {analysisUpload, simulExperienceUpload} from "../../api/Upload";

function AnalysisContainer() {
  const [selectedFile, setSelectedFile] = useState([]);


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files);
    const files = e.target.files;
    let fileNames = "";
    for (const file of files) {
      fileNames += file.name + "  ";
    }
    document.querySelector('.upload_name').value = fileNames;
  }

  const handleFileUpload = async () => {
    const formData = new FormData();
    // 배열 내부에 있는 모든 요소를 append 해야 하므로
    for (let i = 0; i < selectedFile.length; i++) {
      formData.append("attachment", selectedFile[i]);
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    await analysisUpload(formData, config);
    setSelectedFile([]);

  }


  return(
      <AnalysisForm handleFileUpload={handleFileUpload} handleFileChange={handleFileChange} />
  )
}

export default AnalysisContainer;