import React, { useState } from 'react';


import './App.css'; // Ensure this contains the updated CSS.
import html2pdf from 'html2pdf.js';
import Gauge from 'react-gauge-component';
import FileUpload from './components/FileUpload';
import { getPauseStatus, getPauseColor } from './utils/dataUtils';

const App = () => {
  const [data, setData] = useState(null);

  const generatePDF = () => {
    const element = document.getElementById('pdf-content');
    if (element) {
      const options = {
        margin: [20, 20, 20, 20],
        filename: 'report.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };
      html2pdf().from(element).set(options).save();
    }
  };

  const handleFileLoaded = (uploadedData) => {
    setData(uploadedData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: '#4CAF50' }}>PDF Report Generator</h1>
        <div className="button-container">
          <FileUpload onFileLoaded={handleFileLoaded} />
          <button
            onClick={generatePDF}
            className="generate-pdf-button"
            disabled={!data}
          >
            Generate PDF
          </button>
        </div>
      </header>

      {data && (
        <div id="pdf-content" className="pdf-content">
          {/* Reading Section */}
          <div className="section">
            <h2 className="section-title">Reading</h2>
            <div className="overall-reading">
              <div className="progress-bar-container">
                <span className="progress-label">Overall Reading</span>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${data.Reading.overall}%` }}
                  ></div>
                  <div
                    className="progress-value-circle"
                    style={{ left: `calc(${data.Reading.overall}% - 50px)` }}
                  >
                    <span className="progress-value">{data.Reading.overall}</span>
                  </div>
                </div>
                <span className="progress-status">
                  {data.Reading.overall > 50 ? 'Good' : 'Needs Attention'}
                </span>
              </div>
            </div>

            {/* Gauges for Speed and Accuracy */}
            <div className="gauge-container">
              <div className="gauge-item">
                <Gauge
                  value={parseInt(data.Reading.speed)}
                  units="WPM"
                  minValue={0}
                  maxValue={100}
                  width={150}
                  height={150}
                  color="#4CAF50"
                />
                <div className="gauge-label">Speed: {data.Reading.speed} WPM</div>
              </div>
              <div className="gauge-item">
                <Gauge
                  value={parseInt(data.Reading.accuracy)}
                  units="%"
                  minValue={0}
                  maxValue={100}
                  width={150}
                  height={150}
                  color="#4CAF50"
                />
                <div className="gauge-label">Accuracy: {data.Reading.accuracy}%</div>
              </div>
            </div>

            {/* Pauses Section */}
            <div class="pauses">
  <h3>Pauses</h3>
  <div class="pause-bar-container">
    <div class="pause-bar">
      <div class="pause-segment pause-optimal"></div>
      <div class="pause-segment pause-good"></div>
      <div class="pause-segment pause-fair"></div>
      <div class="pause-segment pause-attention"></div>
    </div>
    
    <div class="pause-indicator"></div>
  </div>
  <div class="pause-labels">
    <span class="pause-label">Optimal</span>
    <span class="pause-label">Good</span>
    <span class="pause-label">Fair</span>
    <span class="pause-label">Needs Attention</span>
  </div>
</div>

          </div>

          {/* Mock to Talk Video Section */}
          <div className="section">
            <h2 className="section-title">Mock to Talk Video</h2>
            <div className="overall-reading">
              <div className="progress-bar-container">
                <span className="progress-label">Overall Performance</span>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${data.mocktotalk.overall}%` }}
                  ></div>
                  <div
                    className="progress-value-circle"
                    style={{ left: `calc(${data.mocktotalk.overall}% - 25px)` }}
                  >
                    <span className="progress-value">{data.mocktotalk.overall}</span>
                  </div>
                </div>
                <span className="progress-status">
                  {data.mocktotalk.overall > 50 ? 'Optimal' : 'Needs Attention'}
                </span>
              </div>
            </div>

            {/* Gauge for Speed */}
            <div className='main'>
            <div className="gauge-container">
              <div className="gauge-item">
                <Gauge
                  value={parseInt(data.mocktotalk.speed)}
                  units="%"
                  minValue={0}
                  maxValue={100}
                  width={150}
                  height={150}
                  color="#4CAF50"
                />
                <div className="gauge-label">Speed: {data.mocktotalk.speed}%</div>
              </div>
            </div>

            {/* Emotions Section */}
            
            <div className="emotions">
  <h3 className="sub-title">Emotions during Interview</h3>
  <div className="emotions-grid">
    {['joy', 'sad', 'neutral', 'fear', 'happy'].map((emotion) => (
      <div key={emotion} className="emotion-box">
        <span className="emotion-label">
          {/* Display percentage once */}
          {data.mocktotalk.emotion[emotion]}
        </span>
        <span className="emotion-icon-label">
          {/* Emoji and Emotion together */}
          {emotion === 'joy' && '😊Joy'}
          {emotion === 'sad' && '😢Sad'}
          {emotion === 'neutral' && '😐Neutral'}
          {emotion === 'fear' && '😨Fear'}
          {emotion === 'happy' && '😃Happy'}
        </span>
      </div>
    ))}
  </div>
</div>


</div>


            {/* Pauses Section */}
            
            <div class="pauses">
  <h3>Pauses</h3>
  <div class="pause-bar-container">
    <div class="pause-bar">
      <div class="pause-segment pause-optimal"></div>
      <div class="pause-segment pause-good"></div>
      <div class="pause-segment pause-fair"></div>
      <div class="pause-segment pause-attention"></div>
    </div>
    
    <div class="pause-indicator"></div>
  </div>
  <div class="pause-labels">
    <span class="pause-label">Optimal</span>
    <span class="pause-label">Good</span>
    <span class="pause-label">Fair</span>
    <span class="pause-label">Needs Attention</span>
  </div>
</div>


  
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

