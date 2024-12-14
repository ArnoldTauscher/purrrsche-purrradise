import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

export const ChartWrapper = ({ data, options }) => {
  const chartRef = useRef(null);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setChartSize({ width, height });
      }
    });

    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }}>
      <Line
        data={data}
        options={{
          ...options,
          responsive: true,
          maintainAspectRatio: false,
        }}
        width={chartSize.width}
        height={chartSize.height}
      />
    </div>
  );
};

ChartWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};