import React from 'react';
import { NavLink } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import CURRENT_USER from '../queries/user/CurrentUser'

function UserData() {
  const {data:user, loading: loading} = useQuery(CURRENT_USER)
  console.log(user)
  return (

    <div style={{position:"absolute", top:"10px", left:"30px"}}>
    {!loading ?
      <React.Fragment>
      <h3 style={{color:"#2ecc71"}}>Username: <span>{user.currentUser.firstName} {user.currentUser.lastName}</span></h3>
      <h3 style={{color:"#2ecc71"}}>Code: <span>{user.currentUser.code}</span></h3>
      </React.Fragment>
      :
      null}
    </div>

  );
}

export default UserData;
