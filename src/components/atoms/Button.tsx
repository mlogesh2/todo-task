import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", type = "button" }) => (
    <button
        type={type}
        onClick={onClick}
        className={`px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
    >
        {children}
    </button>
);

export default Button;
