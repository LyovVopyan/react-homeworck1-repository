import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
export interface Data {
  header: string
  main: string
  footer: string
}
let data : Data = {
  // img: "https://cdn6.dissolve.com/p/D25_38_548/D25_38_548_1200.jpg",
  header: "barev",
  main: "hajox",
  footer: "ct"
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App
    // img= "https://cdn6.dissolve.com/p/D25_38_548/D25_38_548_1200.jpg"
    header= "barev"
    main= "hajox"
    footer= "https://cdn6.dissolve.com/p/D25_38_548/D25_38_548_1200.jpg"
    />
  </React.StrictMode>
);