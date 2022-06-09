import {Link} from "react-router-dom";

const User = ({userId}) => {
  return (
      <div id="container">
        <div className="board_contents">
          <div className="inner">
            <div className="my_info clearfix">
              <div className="id_info fl">
                <span><strong>{userId? userId:''}</strong> 회원님의 정보입니다.</span>
              </div>
              <div className="etc_info fl">
                <ul className="clearfix">
                  <li className="info01 fl">
                                <span className="icon">
                                    <img src="img/info01.png" alt="아이콘" />
                                </span>
                    <span className="txt">포인트</span>
                    <span className="ea">
                                    <span className="num">0</span>P
                                </span>
                  </li>
                  <li className="info02 fl">
                                <span className="icon">
                                    <img src="img/info02.png" alt="아이콘" />
                                </span>
                    <span className="txt">캐쉬</span>
                    <span className="ea">
                                    <span className="num">0</span>원
                                </span>
                  </li>
                  <li className="info03 fl">
                                <span className="icon">
                                    <img src="img/info03.png" alt="아이콘" />
                                </span>
                    <span className="txt">Q&A</span>
                    <span className="ea">
                                    <span className="num">0</span>건
                                </span>
                  </li>
                  <li className="info04 fl">
                                <span className="icon">
                                    <img src="img/info04.png" alt="아이콘" />
                                </span>
                    <span className="txt">전문가상담</span>
                    <span className="ea">
                                    <span className="num">0</span>건
                                </span>
                  </li>
                  <li className="info05 fl">
                                <span className="icon">
                                    <img src="img/info05.png" alt="아이콘" />
                                </span>
                    <span className="txt">기술지원</span>
                    <span className="ea">
                                    <span className="num">0</span>건
                                </span>
                  </li>
                </ul>
              </div>
            </div>
            <h2>해석 요청 목록</h2>
            <div className="flex">
              <div className="box">
                <Link to="#" className="list">
                  <img src="img/list01.png" alt="리스트 이미지" />
                  <div className="txt">
                    <span>서울특별시 효원빌딩</span>
                    <h4>화재관련 시뮬레이션 타이틀</h4>
                    <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                  </div>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="list">
                  <img src="img/list02.png" alt="리스트 이미지" />
                  <div className="txt">
                    <span>서울특별시 효원빌딩</span>
                    <h4>화재관련 시뮬레이션 타이틀</h4>
                    <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                  </div>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="list">
                  <img src="img/list03.png" alt="리스트 이미지" />
                  <div className="txt">
                    <span>서울특별시 효원빌딩</span>
                    <h4>화재관련 시뮬레이션 타이틀</h4>
                    <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                  </div>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="list">
                  <img src="img/list04.png" alt="리스트 이미지" />
                  <div className="txt">
                    <span>서울특별시 효원빌딩</span>
                    <h4>화재관련 시뮬레이션 타이틀</h4>
                    <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                  </div>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="list">
                  <img src="img/list05.png" alt="리스트 이미지" />
                  <div className="txt">
                    <span>서울특별시 효원빌딩</span>
                    <h4>화재관련 시뮬레이션 타이틀</h4>
                    <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                  </div>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="list">
                  <img src="img/list06.png" alt="리스트 이미지" />
                  <div className="txt">
                    <span>서울특별시 효원빌딩</span>
                    <h4>화재관련 시뮬레이션 타이틀</h4>
                    <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                  </div>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="list">
                  <img src="img/list07.png" alt="리스트 이미지" />
                  <div className="txt">
                    <span>서울특별시 효원빌딩</span>
                    <h4>화재관련 시뮬레이션 타이틀</h4>
                    <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                  </div>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="list">
                  <img src="img/list08.png" alt="리스트 이미지" />
                  <div className="txt">
                    <span>서울특별시 효원빌딩</span>
                    <h4>화재관련 시뮬레이션 타이틀</h4>
                    <p>화재관련 시뮬레이션 텍스트 및 설명...</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="pagination">
            </div>
          </div>
        </div>
      </div>
  )
}

export default User;