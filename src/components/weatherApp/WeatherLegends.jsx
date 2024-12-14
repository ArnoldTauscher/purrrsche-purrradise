export const TemperatureLegend = () => (
    <div className="legend temperature-legend">
        <h4>Temperatur</h4>
        <div className="legend-scale">
            <ul>
                <li><span style={{backgroundColor: '#91003f'}}></span>40°C</li>
                <li><span style={{backgroundColor: '#ff3800'}}></span>30°C</li>
                <li><span style={{backgroundColor: '#fcd37f'}}></span>20°C</li>
                <li><span style={{backgroundColor: '#ffff00'}}></span>10°C</li>
                <li><span style={{backgroundColor: '#ffffff'}}></span>0°C</li>
                <li><span style={{backgroundColor: '#00ffff'}}></span>-10°C</li>
                <li><span style={{backgroundColor: '#007eff'}}></span>-20°C</li>
            </ul>
        </div>
    </div>
);
  
export const PrecipitationLegend = () => (
    <div className="legend precipitation-legend">
        <h4>Niederschlag</h4>
        <div className="legend-scale">
            <ul>
                <li><span style={{backgroundColor: '#636363'}}></span>Stark</li>
                <li><span style={{backgroundColor: '#969696'}}></span>Mäßig</li>
                <li><span style={{backgroundColor: '#c9c9c9'}}></span>Leicht</li>
                <li><span style={{backgroundColor: '#f0f0f0'}}></span>Kein</li>
            </ul>
        </div>
    </div>
);