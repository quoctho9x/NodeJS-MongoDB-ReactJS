/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import Dashboard from '../Dashboard';
import Mixin from './CustomMixin';
import {bindActionCreators} from 'redux';

class Panel extends React.Component {
    componentDidMount () {
        this.props.loadDashboard();
    }
    render () {
        return (
            <div className="col-md-4">
                <Dashboard title="Panel Non Sequenced" user={this.props.user} data={this.props.dashboard2}/>
            </div>
        );
    }
}

let PanelMixed2 = Mixin(Panel);

const mapStateToProps = (state) => ({
    user      : state.user,
    dashboard2: state.dashboard2
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadDashboard: function () {
        return dispatch({type: 'LOAD_DASHBOARD_NON_SEQUENCED'});
    }}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PanelMixed2);
