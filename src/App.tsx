import React, { useState } from 'react'
import Html5QrcodePlugin from './components/Html5QrcodePlugin';
import ResultContainerPlugin from './components/ResultContainerTable';
import './App.css'

const App = () => {
  const [decodedResults, setDecodedResults] = useState<string[]>([]);

  const onNewScanResult = (decodedText: any, decodedResult: any) => {
    console.log("App [result]", decodedResult, decodedText);
    setDecodedResults(prev => [...prev, decodedResult]);
  };

  return (
    <React.Fragment>
      <div className="App">
        <section className="App-section">
          <div className="App-section-title"> QR Code Scanner </div>
          <br />
          <br />
          <br />
          <Html5QrcodePlugin
            fps={10}

            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
          <ResultContainerPlugin results={decodedResults} />
        </section>
      </div>
    </React.Fragment>
  )
}

export default App