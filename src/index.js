import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './js/Header';
import Icon from './js/Icon';
import Text from './js/Text';
import Body from './js/Body';
import reportWebVitals from './reportWebVitals';
import city1 from './image/new york.jpg';
import city2 from './image/San francisco.jpg';
import city3 from './image/los-angeles.jpg';
import city4 from './image/washington DC.jpg';
import Footer from './js/Footer'

var footer = (
    <div>
        <Footer image={city1} cityName="New York City"/>
        <Footer image={city2} cityName="San Francisco"/>
        <Footer image={city3} cityName="Los Angeles"/>
        <Footer image={city4} cityName="Washington DC"/>
    </div>
)

ReactDOM.render(<Header />,document.getElementById('root'));
ReactDOM.render(<Icon />,document.getElementById('icon'));
ReactDOM.render(<Text />,document.getElementById('text'));
ReactDOM.render(<Body />,document.getElementById('body'));
ReactDOM.render(<footer />,document.getElementById('footer'));

reportWebVitals();
