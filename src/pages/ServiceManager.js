// src/pages/ServiceManager.js

import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const ServiceManager = () => {
    const [ciName, setCIName] = useState('CM0915506');
    const [fromDate, setFromDate] = useState('2023-12-06');
    const [toDate, setToDate] = useState('2023-12-06');
    const [metricsData, setMetricsData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Data for multiple CIs
    const ciMetricsData = {
        'CM0915506': [
            { label: 'Avg MTTR for P3', value: '13 hours' },
            { label: 'Avg MTTD for P3', value: '3 hours' },
            { label: 'Downtime', value: '0.2 hours' },
            { label: 'Availability', value: '99.8%' },
            { label: 'No. of Incidents', value: '30' },
            // ... other metrics
        ],
        'CM0915507': [
            { label: 'Avg MTTR for P3', value: '15 hours' },
            { label: 'Avg MTTD for P3', value: '4 hours' },
            { label: 'Downtime', value: '0.5 hours' },
            { label: 'Availability', value: '99.5%' },
            { label: 'No. of Incidents', value: '40' },
            // ... other metrics
        ],
        'CM0915508': [
            { label: 'Avg MTTR for P3', value: '10 hours' },
            { label: 'Avg MTTD for P3', value: '2 hours' },
            { label: 'Downtime', value: '0.1 hours' },
            { label: 'Availability', value: '99.9%' },
            { label: 'No. of Incidents', value: '20' },
            // ... other metrics
        ],
    };

    // Function to handle Load
    const handleLoad = () => {
        if (ciMetricsData[ciName]) {
            setMetricsData(ciMetricsData[ciName]);
            setErrorMessage('');
        } else {
            setMetricsData([]);
            setErrorMessage('CI not found. Please enter a valid CI Name.');
        }
    };

    // Load initial data
    React.useEffect(() => {
        handleLoad();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    <Button onClick={handleLoad}>Load</Button>
                </div>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            </Card>
            {metricsData.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {metricsData.map((metric, index) => (
                        <Card key={index} className="hover:shadow-md transform hover:-translate-y-1 transition">
                            <h3 className="font-medium text-indigo-700 mb-2">{metric.label}</h3>
                            <p className="text-2xl text-gray-800 font-semibold">{metric.value}</p>
                        </Card>
                    ))}
                </div>
            ) : (
                !errorMessage && <p className="text-gray-500">Please enter a CI Name and load data.</p>
            )}
        </div>
    );
};

export default ServiceManager;
