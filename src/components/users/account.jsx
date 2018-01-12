import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestUserlogin, requestUserlogout} from '../../redux/actions/actions_user';
import { Redirect } from 'react-router-dom';
import avatar_default from '../../images/avatar_default.png';
import ModalEdit from './edit_modal';
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
                                                <img className="img-circle img-responsive" src={ avatar_default } alt="avatar_default"/>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Tên</strong></span> Admin</li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Email</strong></span> {user.user.email}</li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>SDT</strong></span> +391236669992</li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Ngày Sinh</strong></span> 23/07/2016</li>
                                        <li className="list-group-item text-right"><span className="pull-left"><strong>Địa chỉ</strong></span> quận 1, Tp.HCM</li>
                                        <li className="list-group-item text-right">
                                            <div className="group-btn">
                                                <ModalEdit/>
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
const mapDispatchToProps = dispatch => bindActionCreators({requestUserlogin, requestUserlogout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);
