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
              name="code"
              placeholder="code"
            />
            <input type="submit" name="" value="Connect" href="#"/>
      </form>
    </div>
  );
}

export default Heading;
