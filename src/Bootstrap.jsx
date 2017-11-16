import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import store from './redux/store/configure-store';

// Require globals
import 'babel-polyfill';/*dont use, use in webpack*/
import './scss/style.scss';
import 'lodash';

ReactDOM.render(
    <AppContainer>
        <Root store={store} />
    </AppContainer>,
    document.getElementById('example-app')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./Root', () => {
        const NextApp = require('./Root').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp store={store}/>
            </AppContainer>,
            document.getElementById('example-app')
        );
    });
}
