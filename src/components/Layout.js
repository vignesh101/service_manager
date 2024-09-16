import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Server, BarChart, Users, Menu, X, ChevronRight } from 'lucide-react';
import NavLink from './NavLink';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { to: '/', icon: Home, label: 'Home' },
        { to: '/ci-screen', icon: FileText, label: 'CI Screen' },
        { to: '/server-patch', icon: Server, label: 'Server Patch' },
        { to: '/service-management', icon: BarChart, label: 'Service Management' },
        { to: '/service-manager', icon: Users, label: 'Service Manager' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/">
                        <h1 className="text-2xl font-bold text-indigo-600">Service Governor</h1>
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} />
                        ))}
                    </div>
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-md">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="flex items-center">
                                    <item.icon size={18} className="mr-2" />
                                    {item.label}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </nav>

            {/* Breadcrumb */}
            <div className="bg-gray-100">
                <div className="container mx-auto px-4 py-3 flex items-center text-sm text-gray-600">
                    <Link to="/" className="hover:text-indigo-600">
                        Home
                    </Link>
                    <ChevronRight size={16} className="mx-2" />
                    <span className="text-indigo-600 font-medium">
            {navItems.find((item) => item.to === location.pathname)?.label || 'Page'}
          </span>
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">{children}</main>

            {/* Footer */}
            <footer className="bg-white border-t">
                <div className="container mx-auto px-4 py-6 text-center text-gray-500">
                    © 2024 Service Governor. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
