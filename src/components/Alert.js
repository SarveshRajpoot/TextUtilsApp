import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "50px", backgroundColor: "#f4f0ff" }}>
      {props.alert && (
        <div style={{ color: "green" }}>
          <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
