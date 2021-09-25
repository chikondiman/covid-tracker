import React, { useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';


const Chart = () => {
    const [dailyData, setDailyData] = useState({});

useEffect(() => {
    const fetchAPI = async () => {
     setDailyData(await fetchDailyData());
    }

    console.log(dailyData);

    fetchAPI();
}, [dailyData]);




    const lineChart = (
        dailyData
        ? (
            <Line
                data={{
                    labels: '',
                    datasets: [{}, {}],
                }}
            />) : null
    );




    

    return (
        <h1>{lineChart}</h1>

    )
}

export default Chart;