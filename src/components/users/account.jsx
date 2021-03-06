import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestUserlogin, requestUserlogout, requestOrderOfUse} from '../../redux/actions/actions_user';
import { Redirect } from 'react-router-dom';
import avatar_default from '../../images/avatar_default.png';
import { Loading } from '../common/index';
import ModalEdit from './edit_modal';
class Account extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isLogin: false, response: true, orderofuser: {}};
    }
    componentDidUpdate () {
        if (this.props.user.status && !this.state.isLogin) {
            this.props.requestOrderOfUse();
            this.setState({isLogin: true});
        }

        // console.log('user', this.props.user.orderofuser);
    }
    componentWillReceiveProps (nextProps) {
        // console.log('user this lon',this);
        let seft = this;
        var interval = setInterval(function () {
            if (nextProps.user.orderofuser !== undefined) {
                // console.log('user', nextProps.user.orderofuser);
                // console.log('user this nho',seft);
                clearInterval(interval);
                seft.setState({orderofuser: nextProps.user.orderofuser});
            }
        }, 200);
    }

    handleLogout () {
        // xoa localStorage
        this.props.requestUserlogout();
        this.props.history.push('/');
    }
    render () {
        let {user} = this.props;
        let {orderofuser} = this.state;
        console.log('user is state', this.state.orderofuser);
        /*  setInterval(function () {
            console.log('user', user.orderofuser);
        }, 2000); */
        if (user.loading) {
            return (
                <main className="main-contain">
                    <div className="container">
                        <Loading background={true}/>
                    </div>
                </main>
            );
        }
        if (user.status === false && user.constructor === Object) {
            return <Redirect to="/login" />;
        }
        return (
            <main className="main-contain">
                <div className="container">

                    <div className="col-md-12">
                        <h3>Tài khoản của bạn</h3>
                    </div>
                    <div className="noi_dung_moi">
                        <div className="container bootstrap snippet">
                            <div className="row">
                                <div className="col-sm-3">
                                    <ul className="list-group">
                                        <li className="list-group-item text-muted">Thông tin tài khoản</li>
                                        <li className="list-group-item text-right">
                                            <div className="text-center icon-avatar">
                                                <img className="img-circle img-responsive" src={(user.user.avatar !== '') ? user.user.avatar : avatar_default } alt="avatar_default"/>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Tên</strong></span> {user.user.user_name}</li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Email</strong></span> {user.user.email}</li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>SDT</strong></span> {user.user.phone} </li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Ngày Sinh</strong></span> {user.user.birthday}</li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Địa chỉ</strong></span> {user.user.address} </li>
                                        <li className="list-group-item text-right">
                                            <div className="group-btn">
                                                <ModalEdit user = {user.user}/>
                                                <button type="button" onClick={this.handleLogout.bind(this)} className=" btn btn-warning btn-sm"><span className="glyphicon glyphicon-log-out"> Logout</span></button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-9">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Mã đơn hàng</th>
                                                <th>Ngày đặt hàng</th>
                                                <th>Giá đơn hàng</th>
                                                <th>Tình trạng</th>
                                                <th>Xem</th>
                                            </tr>
                                        </thead>
                                        <tbody id="items">
                                            <tr className="accordion-toggle ">
                                                <td>#1111</td>
                                                <td>13/12/2017</td>
                                                <td>$400</td>
                                                <td>Bình thường</td>
                                                <td><button type="button" className="update btn btn-warning btn-sm"><span className="glyphicon glyphicon-eye-open"/></button></td>
                                            </tr>
                                            <tr className="accordion-toggle ">
                                                <td>#1112</td>
                                                <td>14/12/2017</td>
                                                <td>$500</td>
                                                <td>Bình thường</td>
                                                <td><button type="button" className="update btn btn-warning btn-sm"><span className="glyphicon glyphicon-eye-open"/></button></td>
                                            </tr>
                                            <tr className="accordion-toggle ">
                                                <td>#1113</td>
                                                <td>15/12/2017</td>
                                                <td>$300</td>
                                                <td>Bình thường</td>
                                                <td><button type="button" className="update btn btn-warning btn-sm"><span className="glyphicon glyphicon-eye-open"/></button></td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => ({user: state.inforUser});
const mapDispatchToProps = dispatch => bindActionCreators({requestUserlogin, requestUserlogout, requestOrderOfUse}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);
