import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestUserlogin, requestUserlogout} from '../../redux/actions/actions_user';
import { Redirect } from 'react-router-dom';

class Account extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isLogin: true};
    }
    handleLogout () {
        // xoa localStorage
        this.props.requestUserlogout();
        localStorage.removeItem('user');
        this.props.history.push('/');
    }
    render () {
        let {user} = this.props;
        /* let loggerInuser = localStorage.getItem('user');
        if (loggerInuser === null) {
            return <Redirect to="/" />;
        } */
        console.log('user', user);
        if (user.status === false && user.constructor === Object) {
            return <Redirect to="/login" />;
        }
        return (
            <main className="main-contain">
                <div className="container">
                    <div className="row">
                        <h1>day la page account user {user.obj.name}</h1>
                        <button onClick={this.handleLogout.bind(this)}>logout</button>
                    </div>
                </div>
            </main>
        );
    }
}
const mapStateToProps = state => ({user: state.inforUser});
const mapDispatchToProps = dispatch => bindActionCreators({requestUserlogin, requestUserlogout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);
