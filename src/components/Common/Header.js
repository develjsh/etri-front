import {Link} from "react-router-dom";

const Header = ({userId, LogoutContainer}) => {

  return (
      <div id="header">
        <div className="inner">
          <h1>
            <Link to="/" className="logo"/>
          </h1>
          <ul>
            {userId ? <li className="fl"><Link to="/user"><p>마이페이지</p></Link>
            </li> : ''}
            <li className="fl"><Link to="#"><p>고객센터</p></Link></li>
            {userId ? <li className="fl" onClick={LogoutContainer}><p>로그아웃</p></li>
             : <li className="fl"><Link to="/login"><p>로그인/회원가입</p>
            </Link></li>}

          </ul>
        </div>
      </div>
  )
}

export default Header;