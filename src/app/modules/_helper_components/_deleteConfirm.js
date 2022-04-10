import React from "react";
export default function ConfirmDelete({ message, onDialog, itemName }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        onClick={() => onDialog(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h4 stlye={{ color: "#111", fontSize: "16px" }}>{message}</h4>
          <h4 style={{ color: "blue", fontSize: "24px" }}>{itemName}</h4>
          <div>
            <button
              onClick={() => onDialog(true)}
              className="btn btn-danger btn-sm m-5 px-5 py-3"
            >
              Yes
            </button>
            <button
              onClick={() => onDialog(false)}
              className="btn btn-success btn-sm px-5 py-3"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
