import React from "react";

export default function ICustomTable({ ths, children }) {
  
  return (
    <div>
      <table className="table global-table">
        <thead>
          <tr>
            {ths.map((th, index) => {
              return <th key={index}> {th} </th>;
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}