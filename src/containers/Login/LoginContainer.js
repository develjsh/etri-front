import React, {useState, useEffect} from 'react';
import LoginForm from 'components/Login/LoginForm';
import validator from "validator/es";
import {localLogin, localRegister} from "api/Login";
import axios from "axios";

function LoginContainer() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    if(accessToken !== "undefined"){
      if(accessToken !== null){
        alert('현재 로그인되어 있습니다. 로그아웃 후 다시 로그인 시도를 해주세요.');
        document.location.href = '/';
      }
    }

  }, [])

  const onChangeHandler = (e) => {
    let {name, value} = e.target;
    value = value.replace(/(\s*)/g, "");
    if (name === 'userId') {
      let check_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
      if (check_spc.test(value)) {
        return false;
      }
      setUserId(value)
    }else if (name === 'password') {
      setPassword(value);
    }else if (name === 'passwordCheck') {
      setPasswordCheck(value);
    }else if (name === 'email') {
      setEmail(value);
    }
  }

  const validate = {
    valUserId: (value) => {
      return validator.isAlphanumeric(value) || validator.isLength(value,
          {min: 1});
    },
    valPassword: (value) => {
      return validator.isLength(value, {min: 2});
    },
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    if (!validate.valUserId(userId)) {
      alert("아이디는 1자리 이상이여야 합니다.");
      return false;
    }
    if (!validate.valPassword(password)) {
      alert("비밀번호는 2자리 이상이여야 합니다.");
      return false;
    }

    await localLogin(userId, password).then(res => {
      const accessToken = res.data;
      if (accessToken.result === 'false') {
        alert(accessToken.msg);
        return false;
      }

      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      sessionStorage.clear();
      sessionStorage.setItem("userId", accessToken.userId);
      sessionStorage.setItem("accessToken", accessToken.token);
      document.location.href = '/';
    }).catch(error => {
      alert("현재 서버가 원활하지 않습니다. 담당자와 확인 후 다시 시도해주세요.");
      console.log(error);
    });

  }

  const onSubmitRegisterHandler = async (e) => {
    e.preventDefault();
    if (!validate.valUserId(userId)) {
      alert("아이디는 1자리 이상이여야 합니다.");
      return false;
    }else if (!validate.valPassword(password)) {
      alert("비밀번호는 2자리 이상이여야 합니다.");
      return false;
    }else if(password !== passwordCheck){
      alert("비밀번호와 비밀번호확인이 같지 않습니다.");
      return false;
    }
    await localRegister(userId, password, email).then(res => {
      if (res.data.result === 'false') {
        alert(res.data.msg);
        return false;
      }else{
        alert(res.data.msg);
        onSubmitHandler(e);
      }
    })
  }
  return (
      <LoginForm onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} onSubmitRegisterHandler={onSubmitRegisterHandler} userId={userId} password={password} passwordCheck={passwordCheck} email={email}/>
  )

}

export default LoginContainer;