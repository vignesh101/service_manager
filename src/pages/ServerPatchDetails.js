import React from 'react';
import Card from '../components/Card';

const ServerPatchDetails = () => {
    const serverPatches = [
        {
            'Server Name': 'p03p6p0w3524',
            'Service Details': 'EDOC1',
            'Last Patch Date': '09-12-2023',
            Softwares: 'Java',
            'Obsolete Software': 'Flash Player (ActiveX)',
            'Upcoming Patch Date': '10-12-2023',
            Uptime: '8 hrs',
            'Last Patch Status': 'OK',
            'Last Patched': '10-12-2023',
        },
        {
            'Server Name': 'p03p6p0w3525',
            'Service Details': 'EDOC2',
            'Last Patch Date': '08-12-2023',
            Softwares: 'Java',
            'Obsolete Software': 'Flash Player (ActiveX)',
            'Upcoming Patch Date': '11-12-2023',
            Uptime: '12 hrs',
            'Last Patch Status': 'Not OK',
            'Last Patched': '09-12-2023',
        },
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">Server Patch Details</h2>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                        <tr className="bg-indigo-50 text-indigo-700">
                            {Object.keys(serverPatches[0]).map((key) => (
                                <th key={key} className="py-3 px-4">
                                    {key}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {serverPatches.map((patch, index) => (
                            <tr key={index} className="border-b">
                                {Object.values(patch).map((value, vIndex) => (
                                    <td key={vIndex} className="py-3 px-4">
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default ServerPatchDetails;
