import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import WeatherApp from './screens/weatherApp'
import FbPost from './screens/FbPost'
import './App.css';

// function App() {


//     return (
//         <div>
//             <WeatherApp />
//             <FbPost/>
//         </div>
//     );
// }

class App extends React.Component{
    render(){
        return(
            
        <div>
            <WeatherApp />
            <FbPost/>
        </div>
            
        );
    }
}

export default App;
