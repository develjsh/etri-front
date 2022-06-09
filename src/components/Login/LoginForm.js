import {Link} from "react-router-dom";

const LoginForm = ({
  onSubmitHandler,
  onChangeHandler,
  onSubmitRegisterHandler,
  userId,
  password,
  passwordCheck,
  email
}) => {
  return (
      <>
        <div id="height" className="bg">
          <div id="container">
            <div className="login-wrap">
              <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in"
                       defaultChecked/><label htmlFor="tab-1"
                                              className="tab">로그인</label>
                <input id="tab-2" type="radio" name="tab"
                       className="sign-up"/><label htmlFor="tab-2"
                                                   className="tab">회원가입</label>
                <div className="login-form">
                  <form onSubmit={onSubmitHandler}>
                    <div className="sign-in-htm">
                      <div className="group">
                        <label htmlFor="user" className="label">아이디</label>
                        <input name="userId" type="text" className="input"
                               onChange={onChangeHandler} value={userId}/>
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">비밀번호</label>
                        <input name="password" type="password" className="input"
                               onChange={onChangeHandler} value={password}
                               autoComplete="off"/>
                      </div>
                      <div className="group">
                        <input type="submit" className="button" value="로그인"/>
                      </div>
                      <div className="hr"/>
                      <div className="foot-lnk">
                        <Link to="#forgot" className="forgot_btn">Forgot
                          Password?</Link>
                      </div>
                    </div>
                  </form>
                  <form onSubmit={onSubmitRegisterHandler}>
                    <div className="sign-up-htm">
                      <div className="group">
                        <label htmlFor="user" className="label">아이디</label>
                        <input name="userId" type="text" className="input"
                               onChange={onChangeHandler} value={userId}/>
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">비밀번호</label>
                        <input name="password" type="password" className="input"
                               onChange={onChangeHandler} value={password}
                               autoComplete="off"/>
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">비밀번호 확인</label>
                        <input name="passwordCheck" type="password"
                               className="input"
                               onChange={onChangeHandler} value={passwordCheck}
                               autoComplete="off"/>
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">이메일 주소</label>
                        <input name="email" type="email" className="input"
                               onChange={onChangeHandler} value={email}/>
                      </div>
                      <div className="group">
                        <input type="submit" className="button" value="회원가입"/>
                      </div>
                      <div className="hr"/>
                      <div className="foot-lnk">
                        <label htmlFor="tab-1">Already Member?</label>
                      </div>
                    </div>
                  </form>

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
      </>
  )
}

export default LoginForm;