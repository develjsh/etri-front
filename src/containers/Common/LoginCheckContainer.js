const LoginCheckContainer = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  if(accessToken === ""){
    return document.location.href = '/login'
  }else if(accessToken == null){
    return document.location.href = '/login'
  }else if(accessToken === 'undefined'){
    return document.location.href = '/login'
  }else{
    return '';
  }
}

export default LoginCheckContainer;