import React from 'react';

const Button = ({ children, onClick, className = '', icon: Icon }) => (
    <button
        onClick={onClick}
        className={`bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center ${className}`}
    >
        {Icon && <Icon size={18} className="mr-2" />}
        {children}
    </button>
);

export default Button;
