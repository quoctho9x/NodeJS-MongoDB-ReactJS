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
                <Dashboard title="Panel Sequenced" user={this.props.user} data={this.props.dashboard}/>
            </div>
        );
    }
}

let PanelMixed = Mixin(Panel);

const mapStateToProps = (state) => ({
    user     : state.user,
    dashboard: state.dashboard
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadDashboard: function () {
        return dispatch({type: 'LOAD_DASHBOARD'});
    }}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PanelMixed);
