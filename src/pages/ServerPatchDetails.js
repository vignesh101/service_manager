// src/pages/ServerPatchDetails.js

import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const ServerPatchDetails = () => {
    const [selectedServer, setSelectedServer] = useState('p03p6p0w3524');
    const [serverDetails, setServerDetails] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    // Data for multiple servers
    const serverData = {
        'p03p6p0w3524': {
            'Server Name': 'p03p6p0w3524',
            'Service Details': 'EDOC1',
            'Last Patch Date': '09-12-2023',
            Softwares: 'Java, Node.js',
            'Obsolete Software': 'Flash Player (ActiveX)',
            'Upcoming Patch Date': '10-12-2023',
            Uptime: '8 hrs',
            'Last Patch Status': 'OK',
            'Last Patched': '10-12-2023',
        },
        'p03p6p0w3525': {
            'Server Name': 'p03p6p0w3525',
            'Service Details': 'EDOC2',
            'Last Patch Date': '08-12-2023',
            Softwares: 'Python, Java',
            'Obsolete Software': 'Old MySQL version',
            'Upcoming Patch Date': '11-12-2023',
            Uptime: '12 hrs',
            'Last Patch Status': 'Not OK',
            'Last Patched': '09-12-2023',
        },
        'p03p6p0w3526': {
            'Server Name': 'p03p6p0w3526',
            'Service Details': 'EDOC3',
            'Last Patch Date': '07-12-2023',
            Softwares: 'Go, Ruby',
            'Obsolete Software': 'Silverlight',
            'Upcoming Patch Date': '12-12-2023',
            Uptime: '15 hrs',
            'Last Patch Status': 'OK',
            'Last Patched': '07-12-2023',
        },
    };

    // Function to handle server selection
    const handleServerChange = (e) => {
        setSelectedServer(e.target.value);
        if (serverData[e.target.value]) {
            setServerDetails(serverData[e.target.value]);
            setErrorMessage('');
        } else {
            setServerDetails({});
            setErrorMessage('Server not found. Please select a valid server.');
        }
    };

    // Load initial data
    React.useEffect(() => {
        if (serverData[selectedServer]) {
            setServerDetails(serverData[selectedServer]);
        }
    }, [selectedServer]);

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">Server Patch Details</h2>
            <Card className="mb-8">
                <div className="flex items-center">
                    <label className="mr-4 text-gray-700 font-medium">Select Server:</label>
                    <select
                        value={selectedServer}
                        onChange={handleServerChange}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {Object.keys(serverData).map((serverName) => (
                            <option key={serverName} value={serverName}>
                                {serverName}
                            </option>
                        ))}
                    </select>
                </div>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            </Card>
            {Object.keys(serverDetails).length > 0 ? (
                <Card>
                    <h3 className="text-xl font-semibold mb-4 text-indigo-700">Server Details</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <tbody>
                            {Object.entries(serverDetails).map(([key, value]) => (
                                <tr key={key} className="border-b">
                                    <th className="py-2 pr-4 text-gray-600">{key}</th>
                                    <td className="py-2 text-gray-800">{value}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            ) : (
                !errorMessage && <p className="text-gray-500">Please select a server to view details.</p>
            )}
        </div>
    );
};

export default ServerPatchDetails;
