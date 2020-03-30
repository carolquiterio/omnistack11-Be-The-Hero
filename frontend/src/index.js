import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//componente no react é uma funcao que retorna javascript
//jsx = html integrado no javascript(javascript + xml)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
