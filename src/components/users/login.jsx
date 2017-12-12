import React from 'react';
import FormLogin from './formlogin';
import FormRegister from './formregister';
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
        let {match, location, history} = this.props;
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
                                            {this.state.isLogin ? <FormLogin match={match} location={location} history={history} /> : <FormRegister match={match} location={location}/>}
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
