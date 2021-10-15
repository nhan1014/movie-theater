import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
  return (
    <div className="App">
      <body>
      <h1>Hello World!</h1>
      </body>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;