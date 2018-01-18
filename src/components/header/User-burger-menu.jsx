import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import {requestAddtocart} from '../../redux/actions/action_addtocart';
import {requestUserlogout} from '../../redux/actions/actions_user';
import avatar_default from '../../images/avatar_default.png';
class Userburger extends React.Component {
    handleLogout () {
        this.props.requestUserlogout();
    }
    render () {
        let {cart, user} = this.props;
        let length = 0;
        Object.values(cart).map((item, key) => {
            length += item.quantity;
        });
        let countItem = (cart.length > 0) ? <span className="badge-custom">{length}</span> : '';
        const DisplayAvatar = () => {
            if (user.status) {
                return (
                    <div className="text-center icon-avatar">
                        <img className="img-circle img-responsive" src={(user.loading !== true) ? user.user.avatar : avatar_default } alt="avatar_default"/>
                    </div>
                );
            } else {
                return (
                    <div className="text-center icon-avatar">
                        <img className="img-circle img-responsive" src={ avatar_default } alt="avatar_default"/>
                    </div>
                );
            }
        };
        const displayUserName = () => {
            return (user.status) ? user.user.email : null;
        };
        const Login = () => {
            return (<Link to="/login">Đăng nhập</Link>);
        };
        const Logout = () => {
            return (<button className="user-burger-button" onClick={this.handleLogout.bind(this)}>Đăng xuất</button>);
        };
        const displayLoginLogout = () => {
            return (user.status) ? <Logout/> : <Login/>;
        };
        return (
            <ul className="account_text text-center">
                <li>
                    <DisplayAvatar/>
                </li>
                <li>
                    <div className="user-burger">
                        <i className="user-burger-name">
                            <Link to="/login">
                                {displayUserName()}
                            </Link>
                        </i>
                        <span>
                            {displayLoginLogout()}
                        </span>
                        <i>|</i>
                        <span className="icon-cart">
                            <Link to="/cart">
                        Vỏ Hàng{countItem}
                            </Link>
                        </span>
                    </div>
                </li>
            </ul>

        );
    }
}

const mapStateToProps = state => ({cart: state.cart, user: state.inforUser});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter, requestAddtocart, requestUserlogout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Userburger);
