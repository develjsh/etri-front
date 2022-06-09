import {Link} from "react-router-dom";
import ProgressBarTag from "./ProgressBar";

const Main = ({downloadViewer, percentCompleted}) => {
  return (
      <div id="container">
        <div className="main_banner">
          <div className="inner">
            <h2>화재 시뮬레이션 Service</h2>
          </div>
        </div>
        <div className="main_contents">
          <div className="inner">
            <div className="flex">
              <div className="box">
                <h3><Link to="/simul">시뮬레이션 체험 목록<span>더보기</span></Link></h3>
                <div className="main_simul_list clearfix">
                  <Link to="#" className="list fl">
                    <img src="img/list01.png" alt="리스트 이미지"/>
                    <div className="txt">
                      <span>서울특별시 효원빌딩</span>
                      <h4>화재관련 시뮬레이션 타이틀</h4>
                      <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                    </div>
                  </Link>
                  <Link to="#" className="list fl">
                    <img src="img/list02.png" alt="리스트 이미지"/>
                    <div className="txt">
                      <span>서울특별시 효원빌딩</span>
                      <h4>화재관련 시뮬레이션 타이틀</h4>
                      <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                    </div>
                  </Link>
                  <Link to="#" className="list fl">
                    <img src="img/list03.png" alt="리스트 이미지"/>
                    <div className="txt">
                      <span>서울특별시 효원빌딩</span>
                      <h4>화재관련 시뮬레이션 타이틀</h4>
                      <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                    </div>
                  </Link>
                  <Link to="#" className="list fl">
                    <img src="img/list04.png" alt="리스트 이미지"/>
                    <div className="txt">
                      <span>서울특별시 효원빌딩</span>
                      <h4>화재관련 시뮬레이션 타이틀</h4>
                      <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="box mgl10">
                <h3>
                  <Link to="/table"> 문의게시판
                    <span>더보기</span></Link>
                </h3>
                <table>
                  <colgroup>
                    <col width="60px"/>
                    <col/>
                    <col width="94px"/>
                    <col width="94px"/>
                    <col width="80px"/>
                  </colgroup>
                  <thead>
                  <tr>
                    <th>순번</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>시뮬레이션 관련 문의 게시판 제목...</td>
                    <td>코비온라인</td>
                    <td>2021.08.04</td>
                    <td>9999</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>시뮬레이션 관련 문의 게시판 제목...</td>
                    <td>코비온라인</td>
                    <td>2021.08.04</td>
                    <td>9999</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>시뮬레이션 관련 문의 게시판 제목...</td>
                    <td>코비온라인</td>
                    <td>2021.08.04</td>
                    <td>9999</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>시뮬레이션 관련 문의 게시판 제목...</td>
                    <td>코비온라인</td>
                    <td>2021.08.04</td>
                    <td>9999</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>시뮬레이션 관련 문의 게시판 제목...</td>
                    <td>코비온라인</td>
                    <td>2021.08.04</td>
                    <td>9999</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>시뮬레이션 관련 문의 게시판 제목...</td>
                    <td>코비온라인</td>
                    <td>2021.08.04</td>
                    <td>9999</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>시뮬레이션 관련 문의 게시판 제목...</td>
                    <td>코비온라인</td>
                    <td>2021.08.04</td>
                    <td>9999</td>
                  </tr>
                  </tbody>
                </table>
                <div className="pagination">
                </div>
                {percentCompleted < 1 ? "" : <ProgressBarTag percentCompleted={percentCompleted}/>}
                <div className="link_box">
                  <div className="fl">
                    <button className="btn_download"
                            onClick={downloadViewer}>시뮬레이션 다운로드
                    </button>
                  </div>
                  <div className="fr">
                    <Link to="/analysis">
                      <button className="btn_link">해석 요청 바로가기</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="inner">
            <div className="footer_logo">로고</div>
          </div>
        </div>
      </div>
  )
}

export default Main;