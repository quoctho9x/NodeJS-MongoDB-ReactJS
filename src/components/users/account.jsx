import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestUserlogin, requestUserlogout} from '../../redux/actions/actions_user';
import { Redirect } from 'react-router-dom';
import {setCookie, getCookie, checkCookie} from '../../services/cookie';
class Account extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isLogin: true, response: true};
    }
    handleLogout () {
        // xoa localStorage
        this.props.requestUserlogout();
        this.props.history.push('/');
    }
    render () {
        let {user} = this.props;
        if (user.loading) {
            return (
                <div className="container">
                    <h1>loading...</h1>
                </div>
            );
        }
        /* console.log('user ne', user); */
        if (user.status === false && user.constructor === Object) {
            return <Redirect to="/login" />;
        }
        return (
            <main className="main-contain">
                <div className="container">
                    <div className="row">
                        <h1>day la page account user {user.user.email}</h1>
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
