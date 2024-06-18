import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// const promise = axios.get('http://localhost:3001/notes')
// promise.then(response => {
//   console.log(response)
// })

// const promise2 = axios.get('http://localhost:3001/foobar')
// promise2.then(response => {
//   console.log(response)
// })

ReactDOM.createRoot(document.getElementById('root')).render(<App />)