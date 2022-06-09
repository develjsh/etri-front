import {Link} from "react-router-dom";

const TableForm = () => {
  return (
      <div id="container">
        <div className="board_contents">
          <div className="inner">
            <h2>문의 게시판</h2>
            <table>
              <colgroup>
                <col width="60px"/>
                <col/>
                <col width="120px"/>
                <col width="120px"/>
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
              <tr>
                <td>8</td>
                <td>시뮬레이션 관련 문의 게시판 제목...</td>
                <td>코비온라인</td>
                <td>2021.08.04</td>
                <td>9999</td>
              </tr>
              <tr>
                <td>9</td>
                <td>시뮬레이션 관련 문의 게시판 제목...</td>
                <td>코비온라인</td>
                <td>2021.08.04</td>
                <td>9999</td>
              </tr>
              <tr>
                <td>10</td>
                <td>시뮬레이션 관련 문의 게시판 제목...</td>
                <td>코비온라인</td>
                <td>2021.08.04</td>
                <td>9999</td>
              </tr>
              <tr>
                <td>11</td>
                <td>시뮬레이션 관련 문의 게시판 제목...</td>
                <td>코비온라인</td>
                <td>2021.08.04</td>
                <td>9999</td>
              </tr>
              <tr>
                <td>12</td>
                <td>시뮬레이션 관련 문의 게시판 제목...</td>
                <td>코비온라인</td>
                <td>2021.08.04</td>
                <td>9999</td>
              </tr>
              <tr>
                <td>13</td>
                <td>시뮬레이션 관련 문의 게시판 제목...</td>
                <td>코비온라인</td>
                <td>2021.08.04</td>
                <td>9999</td>
              </tr>
              <tr>
                <td>14</td>
                <td>시뮬레이션 관련 문의 게시판 제목...</td>
                <td>코비온라인</td>
                <td>2021.08.04</td>
                <td>9999</td>
              </tr>
              <tr>
                <td>15</td>
                <td>시뮬레이션 관련 문의 게시판 제목...</td>
                <td>코비온라인</td>
                <td>2021.08.04</td>
                <td>9999</td>
              </tr>
              </tbody>
            </table>
            <div className="pagination">
              <Link to="#" className="page_btn prev">Prev</Link>
              <Link to="#" className="page_btn current">1</Link>
              <Link to="#" className="page_btn">2</Link>
              <Link to="#" className="page_btn">3</Link>
              <Link to="#" className="page_btn">4</Link>
              <Link to="#" className="page_btn">5</Link>
              <Link to="#" className="page_btn next">Next</Link>
            </div>
          </div>
        </div>
      </div>


  )
}

export default TableForm;