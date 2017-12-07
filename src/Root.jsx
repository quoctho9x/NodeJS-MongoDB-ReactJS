import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import {ScrollToTop} from './components/common/index';
import { BrowserRouter, HashRouter as Router } from 'react-router-dom';

export default function Root ({store}) {
    return (
        <Provider store={store}>
            <Router>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object
};
