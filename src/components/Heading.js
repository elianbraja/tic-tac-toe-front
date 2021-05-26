import React from "react";

function Heading(props) {
  return (
    <div>
      <h1 className="display-3 heading">Tic-Tac-Toe</h1>
      <form className="box">
          <p className="text-muted"> Connect to friend</p>
            <input
              value={null}
              type="text"
              placeholder="code"
            />
            <input type="submit" value="Connect" href="#"/>
      </form>
    </div>
  );
}

export default Heading;
