'use client'

import React from "react";
import BtnLine from "./btn-line";

import type { IBtn } from "@/types/html.interfaces";

const BtnBlockLine: React.FC<IBtn> = ( {
    type, 
    className, 
    variantLine = "btn-primary", 
    disabled=false,
    text,
    onClick 
}) => {

    return (
        <div className="d-grid gap-2">
            <BtnLine
                type={type}
                text={text}
                variantLine={variantLine}
                className={className} 
                onClick={onClick}
                disabled={disabled}
            />
        </div>
    );
};

export default BtnBlockLine;