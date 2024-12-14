import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChartWrapper } from '../chartWrapper/ChartWrapper';
import { getStockData } from '../../actions/stockActions';
import './purrrschestockchart.css';

export const PurrrscheStockChart = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.stock);
  const [apiLimitReached, setApiLimitReached] = useState(false);

  useEffect(() => {
    dispatch(getStockData());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.Information && data.Information.includes("API rate limit")) {
      setApiLimitReached(true);
    } else {
      setApiLimitReached(false);
      /*console.log("Aktiendaten:", data);*/
    }
  }, [data]);

  const Status = () => {
    if (loading) return <h4>Loading...</h4>;
    if (error) return <h4 className='errortext'>Error: {error}</h4>;
    if (apiLimitReached) return <h4 className='errortext'>API-Limit erreicht. Bitte versuchen Sie es später erneut.</h4>;
    return null;
  };

  const processData = (data) => {
    if (!data || !data['Time Series (Daily)']) {
      return [];
    }
    const timeSeriesData = data['Time Series (Daily)'];
    return Object.entries(timeSeriesData)
      .map(([date, values]) => ({
        date,
        close: parseFloat(values['4. close'])
      }))
      .reverse();
  };

  const chartData = data && !apiLimitReached ? {
    labels: processData(data).map(item => item.date),
    datasets: [
      {
        label: 'Closing Price',
        data: processData(data).map(item => item.close),
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        tension: 0.1
      }
    ]
  } : null;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10,
          font: {
            size: 10
          }
        }
      },
      title: {
        display: true,
        text: 'Purrrsche Stock Price',
        font: {
          size: 14
        }
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size: 8
          },
          maxTicksLimit: 8 // Begrenzt die Anzahl der angezeigten X-Achsen-Labels
        }
      },
      y: {
        ticks: {
          callback: function(value) {
            return value + ' EUR';
          },
          font: {
            size: 8
          }
        }
      }
    }
  };

  return (
    <div className='chart-container'>
      <h1>Purrrsche Aktienkurs</h1>
      <h4>Jetzt ist eine gute Zeit, Aktien zu kaufen. (Angebot gilt solange der Vorrat reicht.)</h4>
      <>{Status()}</>
      <div className='chart-wrapper'>
        {chartData && <ChartWrapper data={chartData} options={options} />}
      </div>
    </div>
  );
};