import React from "react";
import "./BillInfo.css";

export default function BillInfo({ label, value, children, customClass = "" }) {
  return (
    <div className={`billInfoComponentClass ${customClass}`}>
      <h2 className="label">{label}</h2>
      {children ? children : <h2 className="value">{value}</h2>}
    </div>
  );
}