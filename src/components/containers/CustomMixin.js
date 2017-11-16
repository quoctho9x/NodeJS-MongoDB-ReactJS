/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
let Mixin = InnerComponent => class extends React.Component {
    static propTypes () {
        return {
            loadDashboard: PropTypes.loadDashboard.func.isRequired,
            user         : PropTypes.object.isRequired,
            title        : PropTypes.string.isRequired
        };
    }

    componentDidMount () {
        /* start the loading */
        this.props.loadDashboard();
    }
    render () {
        return (<InnerComponent
            {...this.state}
            {...this.props} />);
    }
};

export default Mixin;
