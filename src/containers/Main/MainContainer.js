import Main from "components/Main/Main";
import axios from 'axios';
import {useState} from "react";

function MainContainer() {
  const [percentCompleted, setPercentCompleted] = useState(0);

  const downloadViewer = async () => {
    axios.post('/api/download/ETRIViewer','', {
      responseType: "blob",
      onDownloadProgress: (progressEvent) => {
        // progressEvent.total 값이 0이 나와서 하드 코드로 입력
        let percentCompleted = Math.round((progressEvent.loaded * 100) / 966534916);
        setPercentCompleted(percentCompleted);
      }
    }).then(file => {
      let blob = new Blob([file.data], {
        type: file.headers['content-type'],
      });

      let name= file.headers['content-disposition']; //파일명 디코딩
      let fileName = getFileName(name);
      if(fileName === undefined || fileName === "") {
        alert("해당 파일이 없습니다.");
        setPercentCompleted(0); // 다시 0으로 만들기
        return false;
      }

      if (window.navigator.msSaveOrOpenBlob) { // IE 10+는 해당 함수 제공
        window.navigator.msSaveOrOpenBlob(blob, fileName);
      } else {
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.target = '_self';
        if (fileName) link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link); //메모리 누수 방지
        setPercentCompleted(0); // 다시 0으로 만들기
      }
    })

  }

  const getFileName = (contentDisposition) => {
    let fileName = "";
    try{
      fileName = contentDisposition
      .split(';')
      .filter((el) => el.indexOf('filename') > -1)
      .map((ele) => ele.replace(/"/g, '').split('=')[1]);
    }catch (e){
      console.log(e);
    }

    return fileName[0];
  };

  return (
      <Main downloadViewer={downloadViewer} percentCompleted={percentCompleted}/>
  )
}

export default MainContainer;