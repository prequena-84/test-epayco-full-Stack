'use client'

import React from "react";

import type { ISelect } from "@/types/html.interfaces";

const SelectTypeTransactions: React.FC<ISelect> = ({
  name, 
  className, 
  value, 
  onChange
}) => {

  return (
    <select 
      name={name}
      className={`form-select form-select-lg mb-3 ${className}`} 
      aria-label="Large select example"
      value={value}
      onChange={onChange}
    >
      <option value="recarga" >recarga</option>
      <option value="pago" >pago</option>
    </select>
  );
};

export default SelectTypeTransactions;