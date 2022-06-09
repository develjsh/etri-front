const AnalysisForm =({handleFileUpload, handleFileChange}) => {
  return (
      <div id="height" className="bg">
        <div id="container">
          <div className="inner">
            <div id="analysis_container">
              <h2>시뮬레이션 체험 목록</h2>
              <div className="anaalysis_content">
                <h3>요청 파일 선택</h3>
                <div className="filebox clearfix">
                  <input type="file" name="sfile_name" id="sfile_name" onChange={handleFileChange} multiple="multiple"  />
                  <input className="upload_name fl" defaultValue="파일선택"  readOnly/>
                  <label htmlFor="sfile_name" className="fr" >파일선택</label>
                </div>
                <button className="analysis_btn" onClick={handleFileUpload}>해석요청</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


export default AnalysisForm;