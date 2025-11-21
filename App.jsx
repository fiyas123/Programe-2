import React, { useState } from 'react';
import './App.css'; // Import the CSS

function App() {
  const [input, setInput] = useState('');
  const [series, setSeries] = useState([]);

  const generateSeries = () => {
    const a = parseInt(input);
    if (!isNaN(a) && a > 0) {
      const oddNumbers = Array.from({ length: a }, (_, i) => 2 * i + 1);
      setSeries(oddNumbers);
    } else {
      setSeries([]);
    }
  };

  return (
    <div className="container">
      <h2>Odd Number Series Generator</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={generateSeries}>Generate</button>
      <div className="output">
        {series.length > 0 && <p>Output: {series.join(', ')}</p>}
      </div>
    </div>
  );
}

export default App;
