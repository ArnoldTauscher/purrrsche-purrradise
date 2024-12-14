import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '24-Stunden Vorhersage',
    },
  },
  scales: {
    x: {
      ticks: { maxRotation: 45, minRotation: 45, }
    },
    y: {
      ticks: {
        callback: function(value) {
          return value + '°C';
        }
      }
    }
  }
};

export const createChartData = (forecastData) => {
  return {
    labels: forecastData.list.slice(0, 8).map(item => new Date(item.dt * 1000).toLocaleTimeString()),
    datasets: [
      {
        label: 'Temperatur',
        data: forecastData.list.slice(0, 8).map(item => item.main.temp),
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
    ],
  };
};