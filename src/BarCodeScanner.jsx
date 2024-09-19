// src/BarcodeScanner.jsx

import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader'; // Use named import instead of default

const BarcodeScanner = () => {
  const [data, setData] = useState('No data');

  const handleScan = (scannedData) => {
    if (scannedData) {
      setData(scannedData);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}
      />
      <p>Scanned Data: {data}</p>
    </div>
  );
};

export default BarcodeScanner;