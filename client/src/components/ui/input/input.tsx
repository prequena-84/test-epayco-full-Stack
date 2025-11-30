'use client'

import React from "react";

import type { IInputGroupText } from "@/types/html.interfaces";

const Input:React.FC<IInputGroupText> = ({
    name,
    type="text",
    placeHolder,
    arialLabel,
    onChange,
    value, 
    className = undefined,
    classInput = undefined,
    disabled = false,
}) => {
    
    return (
        <div className={`input-group mb-3 ${className}`}>
            <input 
                name={name} 
                value={value}
                onChange={onChange} 
                type={type} 
                className={`form-control ${classInput}`}
                placeholder={placeHolder} 
                aria-label={arialLabel} 
                aria-describedby="basic-addon1"
                disabled={disabled}
            />
        </div>
    );
};

export default Input;