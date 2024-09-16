// src/pages/ServiceManagement.js

import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ServiceManagement = () => {
    const [ciName, setCIName] = useState('CM0915506');
    const [fromDate, setFromDate] = useState('2023-12-07');
    const [toDate, setToDate] = useState('2023-12-12');

    const statusBars = [
        {
            label: 'Security',
            values: [
                { color: 'bg-red-500', width: '10%' },
                { color: 'bg-green-500', width: '90%' },
            ],
        },
        {
            label: 'Resource',
            values: [
                { color: 'bg-red-500', width: '10%' },
                { color: 'bg-green-500', width: '60%' },
                { color: 'bg-yellow-500', width: '30%' },
            ],
        },
        {
            label: 'Utility',
            values: [
                { color: 'bg-red-500', width: '10%' },
                { color: 'bg-green-500', width: '60%' },
                { color: 'bg-yellow-500', width: '30%' },
            ],
        },
    ];

    // Sample data for the chart
    const chartData = {
        labels: ['Dec 7', 'Dec 8', 'Dec 9', 'Dec 10', 'Dec 11', 'Dec 12'],
        datasets: [
            {
                label: 'Service Performance',
                data: [85, 90, 78, 88, 92, 95],
                fill: false,
                borderColor: 'rgb(99, 102, 241)', // Indigo color
                backgroundColor: 'rgba(99, 102, 241, 0.5)',
                tension: 0.1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Service Performance Over Time',
            },
        },
    };

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">Service Management</h2>
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
            <Card className="mb-8">
                {statusBars.map((bar, index) => (
                    <div key={index} className="mb-6">
                        <span className="font-medium text-indigo-700 block mb-2">{bar.label}</span>
                        <div className="h-6 flex rounded-full overflow-hidden bg-gray-200">
                            {bar.values.map((value, vIndex) => (
                                <div
                                    key={vIndex}
                                    className={`h-full ${value.color}`}
                                    style={{ width: value.width }}
                                ></div>
                            ))}
                        </div>
                    </div>
                ))}
            </Card>
            <Card>
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">Performance Chart</h3>
                <div className="h-80">
                    <Line data={chartData} options={chartOptions} />
                </div>
            </Card>
        </div>
    );
};

export default ServiceManagement;
