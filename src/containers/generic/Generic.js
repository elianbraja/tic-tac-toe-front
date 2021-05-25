import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";
import CREATE_USER_MUTATION from '../../mutations/user/CreateUser'
import CURRENT_USER from '../../queries/user/CurrentUser'

function Generic() {


  return (
    <div style={{textAlign:"center", color:"#2ecc71"}}>We just sent you an email. Please confirm your email address.</div>
  );
}

export default Generic;
