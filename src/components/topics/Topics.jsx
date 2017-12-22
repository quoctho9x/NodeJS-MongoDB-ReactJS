import React from 'react';
import { Route, Link } from 'react-router-dom';
import {Notification} from '../common/index';
import AlertContainer from 'react-alert';

export default class Topics extends React.Component {
    constructor (props) {
        super(props);
        this.state = {show: false};
    }
    handleNotification () {
        this.setState({show: true});
    }
    alertOptions = {
        offset: 14,
        position: 'bottom right',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
    };

    showAlert = () => {
        this.msg.show('Some text or component', {
            time: 4000,
            type: 'success'
        })
    };
    render () {
        let {match} = this.props;
        return (
            <main className="main-contain">
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            back to home
                        </Link>
                    </li>
                </ul>
                <Route path={`${match.url}/:topicId`} component={Topic}/>
                <Route exact path={match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <button onClick={this.showAlert}>Show Alert</button>
                <button onClick={this.handleNotification.bind(this)}> show notification</button>
                <Notification status={this.state.show} type="success" message="day la Notification"/>
            </main>
        );
    }
}

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);
