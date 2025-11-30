'use client'

import React from "react";

import type { IBtn } from "@/types/html.interfaces";

const BtnOutLine:React.FC<IBtn> = ( {
    type="button",
    text,
    onClick,
    className,
    variantOutLine="btn-outline-primary",
    ariaDisabled="false",
    disabled=false,
    sizes="btn-sm",
} ) => {

    return (
        <button 
            type={type}
            onClick={onClick}
            className={`btn ${variantOutLine} ${sizes} ${className}`}
            arial-disabled={ariaDisabled}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default BtnOutLine;