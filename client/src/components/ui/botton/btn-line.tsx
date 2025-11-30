'use client'

import React from "react";

import type { IBtn } from "@/types/html.interfaces";

const BtnLine:React.FC<IBtn> = ( {
    type="button",
    text,
    onClick,
    className,
    variantLine="btn-primary",
    disabled=false,
    sizes="btn-sm",
} ) => {

    return (
        <button 
            type={type}
            onClick={onClick}
            className={`btn ${variantLine} ${sizes} ${className}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default BtnLine;