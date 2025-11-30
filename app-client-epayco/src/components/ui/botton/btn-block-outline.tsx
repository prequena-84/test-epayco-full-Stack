'use client'

import React from "react";
import BtnOutLine from "./btn-outline";

import type { IBtn } from "@/types/html.interfaces";

const BtnBlockOutLine: React.FC<IBtn> = ( {
    type, 
    className, 
    variantOutLine = "btn-outline-primary", 
    disabled=false,
    text,
    sizes = "btn-sm",
    onClick 
}) => {

    return (
        <div className="d-grid gap-2">
            <BtnOutLine
                type={type}
                text={text}
                variantOutLine={variantOutLine}
                className={className} 
                onClick={onClick}
                sizes={sizes}
                disabled={disabled}
            />
        </div>
    );
};

export default BtnBlockOutLine;