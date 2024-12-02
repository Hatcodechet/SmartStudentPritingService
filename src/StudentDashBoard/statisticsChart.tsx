import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StatisticsChart: React.FC = () => {

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 
        datasets: [
            {
                label: 'Print Orders',
                data: [5, 10, 15, 20, 25, 30], 
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: true, position: 'top' },
        },
    };

    return (
        <div className="p-4 rounded-lg border  border-slate-200">
            <h2 className="text-lg font-bold mb-4">Thống kê</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default StatisticsChart;
