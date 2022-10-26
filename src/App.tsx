import React from 'react';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap';
import './App.css';
import Layout from './app/base/layout';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Layout />
            </div>
        </Provider>
    );
}

export default App;
