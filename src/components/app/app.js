import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Background from './food-bg.jpg';

const App = () => { // из пропсов достаем это значение

    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Route path='/' exact component={MainPage}/>
            <Route path='/cart'  component={CartPage}/>
            {/* <Route  exact component={MainPage}/> */}
            </div>
        </Router>

    )
}

export default App;