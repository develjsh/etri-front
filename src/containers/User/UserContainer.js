import UserForm from "components/User/UserForm";

function UserContainer() {
  const userId = sessionStorage.getItem('userId');

  return(
      <UserForm userId={userId}/>
  )
}

export default UserContainer;