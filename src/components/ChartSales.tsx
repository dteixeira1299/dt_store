import React from "react";
import { Chart } from "react-google-charts";
import './ChartSales.css';

export const data = [
    ["Year", "Sales", "New Clients"],
    ["Jan", 1000, 300],
    ["Feb", 1170, 125],
    ["Mar", 660, 200],
    ["Apr", 500, 0],
    ["May", 1030, 50],
    ["Jun", 1000, 100],
    ["Jul", 1500, 15],
    ["Aug", 20, 0],
    ["Sep", 800, 100],
    ["Oct", 900, 90],
    ["Nov", 1045, 200],
    ["Dec", 1000, 145],
];

export const options = {
    title: "Sales and New Clients",
    hAxis: {
        title: "Month", titleTextStyle: { color: "#fff" }, textStyle: {
            color: "#FFFFFF"
        },
    },
    vAxis: {
        minValue: 0, textStyle: {
            color: "#FFFFFF"
        },
    },
    backgroundColor: 'transparent',
    legendTextStyle: { color: '#FFF' },
    titleTextStyle: { color: '#FFF' },
    colors: ['#006600','#990000'],
};

const ChartSales: React.FC = () => {
    return (
        <Chart
            chartType="AreaChart"
            width="100%"
            height="500px"
            data={data}
            options={options}
        />
    );
};

export default ChartSales;