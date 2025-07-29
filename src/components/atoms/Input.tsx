import React from "react";

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, onKeyDown }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        data-wow-duration={"1s"}
        className="wow animate__fadeIn border border-gray-300 rounded px-3 py-2 w-full"
    />
);

export default Input;
