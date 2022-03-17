import React from 'react';
import ReactDOM from 'react-dom';
import GitHub from './pages/github/github';

ReactDOM.render(
  <React.StrictMode>
    <GitHub user="worthdavi"/>
  </React.StrictMode>,
  document.getElementById('root')
);