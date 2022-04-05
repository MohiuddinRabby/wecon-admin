import React from "react";
import { useParams } from "react-router-dom";
export default function ViewSingleUser() {
  const id = useParams();
  console.log("params", id);
  return (
    <div>
      <h1>Single user details</h1>
    </div>
  );
}
