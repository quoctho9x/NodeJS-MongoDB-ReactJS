import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import { BrowserRouter as Router, HashRouter, hashHistory, browserHistory } from 'react-router-dom';

export default function Root ({
    store
}) {
    return (
        <Provider store={store}>
            <HashRouter >
                <App />
            </HashRouter>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object
};
