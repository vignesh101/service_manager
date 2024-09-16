import React from 'react';

const Card = ({ children, className = '' }) => (
    <div
        className={`bg-white shadow-sm rounded-xl p-6 border border-gray-100 transition-transform transform hover:scale-105 ${className}`}
    >
        {children}
    </div>
);

export default Card;
