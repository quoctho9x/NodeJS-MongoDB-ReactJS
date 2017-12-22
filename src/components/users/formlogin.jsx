import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestUserlogin} from '../../redux/actions/actions_user';
import { Loading } from '../common/index';
import AlertContainer from 'react-alert';
class FormLogin extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email   : '',
            password: ''
        };
    }
    componentDidMount () {
        let {user} = this.props;
        if (user.status === true && user.constructor === Object) {
            console.log('user', user);
            this.props.history.push('/account');
        }
    }
    componentWillReceiveProps (newProps) {
        let {user} = newProps;
        if (user.status === true && user.constructor === Object) {
            this.props.history.push('/');
        }
    }
    handleEmailChange (e) {
        this.setState({email: e.target.value});
    }
    handlePasswordChange (e) {
        this.setState({password: e.target.value});
    }
    handleSubmit (e) {
        e.preventDefault();
        let {user} = this.props;
        let { email, password } = this.state;
        this.props.requestUserlogin({email, password});
    }
    render () {
        let {email, password} = this.state;
        let {user} = this.props;
        const loading = (user.loading) ? <Loading background={true}/> : null;
        return (
            <form id="login-form" role="form">
                {loading}
                <div className="form-group">
                    <input type="text" name="email" required placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="password" name="password" required placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} className="form-control"/>
                </div>
                <div className="form-group text-center">
                    <input type="checkbox" className="" name="remember" id="remember"/>
                    <label htmlFor="remember"> Remember Me</label>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <input type="submit" name="login-submit" onClick={this.handleSubmit.bind(this)} id="login-submit" className="form-control btn btn-login" value="Log In"/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <a href="https://phpoll.com/recover" className="forgot-password">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
const mapStateToProps = state => ({user: state.inforUser});
const mapDispatchToProps = dispatch => bindActionCreators({requestUserlogin}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
