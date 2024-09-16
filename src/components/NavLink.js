import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, icon: Icon, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-300 ${
                isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
        >
            <Icon size={18} />
            <span>{label}</span>
        </Link>
    );
};

export default NavLink;
