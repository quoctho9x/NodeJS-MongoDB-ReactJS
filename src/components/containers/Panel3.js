/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import Dashboard from '../Dashboard';
import Mixin from './CustomMixin';
import {bindActionCreators} from 'redux';

class Panel extends React.Component {
    ComponentDitMount () {
        this.props.loadDashboard();
    }
    render () {
        return (
            <div className="col-md-4">
                <Dashboard title="Panel Non Sequenced Non Blocking" user={this.props.user} data={this.props.dashboard3}/>
            </div>
        );
    }
}

let PanelMixed3 = Mixin(Panel);

const mapStateToProps = (state) => ({
    user      : state.user,
    dashboard3: state.dashboard3
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadDashboard: function () {
        return dispatch({type: 'LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING'});
    }}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PanelMixed3);
