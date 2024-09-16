import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Search } from 'lucide-react';

const CIScreen = () => {
    const [ciName, setCIName] = useState('CM0915506');

    const ciDetails = {
        'CI Name': 'CM0915506',
        'CI Description': 'e-Doc-Availability and Capacity Plan',
        'Server Owner': 'p03p6p0w3524',
        'Primary SPG Group': 'CCL_ROPS_HomeBuyingSupport',
        'Upcoming Change': '11-12-2023',
        'Related CI Names': 'CM0057264, CM0357964, CM0057265',
        'CI Status': 'In-service',
        'Change Description': 'Track update to endpoints',
        'Recent Change': 'CHG0076161',
        'Recent Open Incident': 'INC030367',
        'Change Implementer': 'Prasad Sekar',
        'Health Check Status': 'Status Code 200',
    };

    const servers = [
        { name: 'p03p6p0w7311', status: 'ok' },
        { name: 'p03p6p0w7024', status: 'ok' },
        { name: 'p03p6p0w7458', status: 'error' },
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">CI Screen</h2>
            <Card className="mb-8">
                <div className="flex items-center">
                    <input
                        type="text"
                        value={ciName}
                        onChange={(e) => setCIName(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter CI Name"
                    />
                    <Button icon={Search} className="ml-2">
                        Search
                    </Button>
                </div>
            </Card>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <h3 className="text-xl font-semibold mb-4 text-indigo-700">CI Details</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <tbody>
                            {Object.entries(ciDetails).map(([key, value]) => (
                                <tr key={key} className="border-b">
                                    <th className="py-2 pr-4 text-gray-600">{key}</th>
                                    <td className="py-2 text-gray-800">{value}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
                <Card>
                    <h3 className="text-xl font-semibold mb-4 text-indigo-700">List of Servers</h3>
                    <ul>
                        {servers.map((server) => (
                            <li
                                key={server.name}
                                className="mb-3 flex items-center p-3 rounded-lg bg-gray-50"
                            >
                <span
                    className={`mr-3 text-2xl ${
                        server.status === 'ok' ? 'text-green-500' : 'text-red-500'
                    }`}
                >
                  ●
                </span>
                                <span className="text-gray-800 font-medium">{server.name}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default CIScreen;
