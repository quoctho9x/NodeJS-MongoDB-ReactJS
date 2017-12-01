import React from 'react';
export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isLogin: true};
    }
    handleLogin () {
        this.setState({isLogin: true});
    }
    handleRegister () {
        this.setState({isLogin: false});
    }
    render () {
        return (
            <main className="main-contain">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="panel panel-login">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <a href="javascript:void(0);" onClick={this.handleLogin.bind(this)} className={ this.state.isLogin ? 'active' : '' } id="login-form-link">Login</a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a href="javascript:void(0);" onClick={this.handleRegister.bind(this)} className={ this.state.isLogin ? '' : 'active' } id="register-form-link">Register</a>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {this.state.isLogin ? <FormLogin/> : <FormRegister/>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

function FormLogin () {
    return (
        <form id="login-form" action="https://phpoll.com/login/process"
            method="post" role="form">
            <div className="form-group">
                <input type="text" name="username" id="username" tabIndex="1"
                    className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" tabIndex="2"
                    className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group text-center">
                <input type="checkbox" tabIndex="3" className="" name="remember"
                    id="remember"/>
                <label htmlFor="remember"> Remember Me</label>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="login-submit" id="login-submit"
                            tabIndex="4" className="form-control btn btn-login"
                            value="Log In"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <a href="https://phpoll.com/recover" tabIndex="5"
                                className="forgot-password">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

function FormRegister () {
    return (
        <form id="register-form" action="https://phpoll.com/register/process"
            method="post" role="form">
            <div className="form-group">
                <input type="text" name="username" id="username" tabIndex="1"
                    className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" tabIndex="1"
                    className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" tabIndex="2"
                    className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
                <input type="password" name="confirm-password" id="confirm-password"
                    tabIndex="2" className="form-control"
                    placeholder="Confirm Password"/>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="register-submit"
                            id="register-submit" tabIndex="4"
                            className="form-control btn btn-register"
                            value="Register Now"/>
                    </div>
                </div>
            </div>
        </form>
    );
}
