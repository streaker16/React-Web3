import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*
function formatNama(mahasiswa){
    return mahasiswa.nama_depan + ' ' + mahasiswa.nama_belakang;
}

const mhs = {
    nama_depan : 'Abi',
    nama_belakang : 'Daffa'
}
*/
/*function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);*/

// function HelloWorld (props){
//     return <h1>Hello {props.nama} World from Component (function)</h1>
// }

// ReactDOM.render(<HelloWorld nama="Muhammad Abi"/>, document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
