import Header from "../../components/Common/Header";
import {localLogout} from "../../api/Login";

function HeaderContainer() {
  const userId = sessionStorage.getItem('userId');

  const LogoutContainer =  () => {
    localLogout().then(() => {
      sessionStorage.clear();
      document.location.href = '/login';
    });
  }

  return(
      <Header userId={userId} LogoutContainer={LogoutContainer}/>
  )
}

export default HeaderContainer;