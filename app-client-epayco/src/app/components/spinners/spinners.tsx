'use client'

import { ClipLoader } from "react-spinners";

export default function Spinners() {
    // Estilos replicado de Bootstrap
    return (
        <div 
            style={{ 
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(3px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
            }}
        >
            <ClipLoader 
                color="#36d7b7" 
                size={100} 
            />
        </div>
    );
};