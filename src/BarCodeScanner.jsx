import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';

const Test = () => {
  const [result, setResult] = useState('No result');

  const handleScan = (data) => {
    setResult(data);
  }

  const handleError = (err) => {
    console.error(err);
  }

  return (
    <div style={{width:"90vw", }}>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>Scanned Data</p>
      <p>{result}</p>
    </div>
  );
}
export default Test;