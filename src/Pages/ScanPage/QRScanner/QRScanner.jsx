import React from "react";
import QrReader from "react-qr-scanner";

function QRScanner({ onError, onScan, delay = 3000 }) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return <div>Camera access is not supported in this browser.</div>;
  }
  return (
    <QrReader
      delay={delay}
      constraints={{
        audio: false,
        video: { facingMode: "environment" },
      }}
      onError={onError}
      onScan={onScan}
      style={{
        width: "100%",
        borderRadius: "15px",
      }}
    />
  );
}

export default QRScanner;
