import React from "react";
import Bord from "../../components/Bord";
import Heading from "../../components/Heading";
import UserData from "../../components/UserData";

function Playground() {
  return (
    <div style={{position:"relative"}}>
      <div className="playground">
        <Heading />
        <Bord />
      </div>
        <UserData/>
    </div>
  );
}

export default Playground;
