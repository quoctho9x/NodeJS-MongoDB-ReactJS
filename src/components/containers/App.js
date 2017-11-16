import React from 'react';
import PropTypes from 'prop-types';
import PanelMixed from './Panel';
import PanelMixed2 from './Panel2';
import PanelMixed3 from './Panel3';

class App extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <PanelMixed/>
                        <PanelMixed2/>
                        <PanelMixed3/>
                        <a href="https://github.com/andresmijares/async-redux-saga" target="_new">Check the repo here</a>
                    </div>
                </div>
            </div>
        );
    }
}

/* App.propTypes = {
    panel : PropTypes.object.isRequired,
    panel2: PropTypes.object.isRequired,
    panel3: PropTypes.object.isRequired
}; */

export default App;
