import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const ServiceManager = () => {
    const [ciName, setCIName] = useState('CM0915506');
    const [fromDate, setFromDate] = useState('2023-12-06');
    const [toDate, setToDate] = useState('2023-12-06');

    const metricsData = [
        { label: 'Avg MTTR for P3', value: '13 hours' },
        { label: 'Avg MTTD for P3', value: '3 hours' },
        { label: 'Downtime', value: '0.2 hours' },
        { label: 'Availability', value: '99.8%' },
        { label: 'No. of Incidents', value: '30' },
        { label: 'No. of Changes Completed', value: '10' },
        { label: 'No. of Failed Changes', value: '3' },
        { label: 'No. of Open Problem Records', value: '4' },
        { label: 'Change Description', value: 'Track update to endpoints' },
        { label: 'Recent Change', value: 'CHG0076161' },
        { label: 'Recent Open Incident', value: 'INC030367' },
        { label: 'Change Implementer', value: 'Vignesh Ravishankar' },
        { label: 'Health Check Status', value: 'Status Code 200' },
        { label: 'Owner Details', value: 'Business Owner: Meenakshi' },
        { label: 'SSL Cert Expiry Date', value: '24/06/2024' },
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">Service Manager</h2>
            <Card className="mb-8">
                <div className="flex flex-wrap items-center gap-4">
                    <input
                        type="text"
                        value={ciName}
                        onChange={(e) => setCIName(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter CI Name"
                    />
                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <Button>Load</Button>
                </div>
            </Card>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {metricsData.map((metric, index) => (
                    <Card key={index} className="hover:shadow-md transform hover:-translate-y-1 transition">
                        <h3 className="font-medium text-indigo-700 mb-2">{metric.label}</h3>
                        <p className="text-2xl text-gray-800 font-semibold">{metric.value}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ServiceManager;
