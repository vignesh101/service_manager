import React from 'react';
import { FileText, Server, BarChart, Users } from 'lucide-react';
import Card from '../components/Card';

const Home = () => (
    <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-indigo-700">Welcome to Service Governor</h1>
        <p className="text-lg text-gray-600 mb-12">
            Manage your services with ease and efficiency
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { title: 'CI Screen', icon: FileText, description: 'Manage Configuration Items', link: '/ci-screen' },
                { title: 'Server Patch', icon: Server, description: 'Monitor server updates', link: '/server-patch' },
                { title: 'Service Management', icon: BarChart, description: 'Oversee service performance', link: '/service-management' },
                { title: 'Service Manager', icon: Users, description: 'Coordinate service operations', link: '/service-manager' },
            ].map((service) => (
                <a
                    href={service.link}
                    key={service.title}
                    className="transform hover:scale-105 transition-transform"
                >
                    <Card className="text-center cursor-pointer">
                        <service.icon size={48} className="mx-auto mb-4 text-indigo-600" />
                        <h3 className="text-xl font-semibold mb-2 text-indigo-700">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </Card>
                </a>
            ))}
        </div>
    </div>
);

export default Home;
