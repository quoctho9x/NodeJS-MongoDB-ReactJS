import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestOrderCart} from '../../../redux/actions/action_addtocart';

class Step3 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {samplePay: {}};
    }
    componentWillMount () {
        let {getStore} = this.props;
        this.setState({samplePay: getStore()});
        // console.log('componentWillMount', getStore());
    }
    getvalueinput (item, e) {
        let value = e.target.value;
        if (value <= 0) {
            value = 1;
            e.target.value = 1;
        }
        this.props.requestUpdateitemcart({item, value});
    }
    handleOrderCart () {
        let {getStore} = this.props;
        this.props.requestOrderCart(getStore());
        this.props.history.push('/');
    }
    render () {
        // let {match} = this.props;
        let {samplePay} = this.state;
        //console.log('samplePay', samplePay);
        let length = 0, total = 0, cost_transport = 5;
        const ListItems = Object.values(samplePay.cart).map((item, key) => {
            length += item.quantity;
            total += item.quantity * item.price;
            return (
                <tr key={key}>
                    <td className="">
                        <div className="detail-cart">
                            <Link to={`/products/${item.index}`} className="thumbnail" title={item.name}>
                                <img src={item.link} className="media-object img-responsive" alt="xanhduonglunartempo"/>
                            </Link>
                            <div className="detail-cart-content">
                                <h4 className="media-heading">
                                    <Link to={`/products/${item.index}`} title={item.name}>
                                        {item.name}
                                    </Link>
                                </h4>
                                <h5 className="media-heading"> Màu sắc: {item.color}</h5>
                                <h5 className="media-heading"> size: {item.size}</h5>
                                <h5 className="media-heading"> Số lượng: {item.quantity}</h5>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        });
        return (
            <div className="step-3">
                <div className="row">
                    <div className="col-md-7 thankyou-message">
                        <div className="thankyou-message-icon unprint">
                            <div className="icon icon-order-success">
                                <i className="fa fa-check-square-o" aria-hidden="true"/>
                            </div>
                        </div>
                        <div className="thankyou-message-text">
                            <h3>Cảm ơn bạn đã đặt hàng</h3>
                            <p>
                                Một email xác nhận đã được gửi tới {samplePay.user.email} Xin vui lòng kiểm tra email của bạn
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5 order-info">
                        <table className="table table-hover table-cart-list">
                            <thead>
                                <tr>
                                    <th><h3 className="mg_none">Đơn hàng</h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                {ListItems}
                                <tr>
                                    <td>
                                        <h5 className="mg_none">Tạm tính : <strong>${total}</strong></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 className="mg_none">phí vận chuyển : <strong>${cost_transport}</strong></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3 className="mg_none">Tổng tiền : <strong>${total + cost_transport}</strong></h3>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-7 col-sm-12 customer-info">

                        <div className="shipping-info">
                            <div className="row">

                                <div className="col-md-6 col-sm-6">
                                    <div className="order-summary order-summary--white no-border no-padding-top">
                                        <div className="order-summary-header">
                                            <h4>Thông tin nhận hàng</h4>
                                        </div>
                                        <div className="summary-section no-border no-padding-top">
                                            <p className="user-name"><strong>Tên:</strong> {samplePay.user.name}</p>
                                            <p className="user-email"><strong>Email:</strong> {samplePay.user.email}</p>
                                            <p className="user-phone"><strong>SĐT:</strong> {samplePay.user.phone}</p>
                                            <p className="user-birthday"><strong>Ngày sinh:</strong> {samplePay.user.birthday}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <div className="order-summary order-summary--white no-border">
                                        <div className="order-summary-header">
                                            <h4>Thông tin thanh toán</h4>
                                        </div>
                                        <div className="summary-section no-border no-padding-top">
                                            <p className="user-address"><strong>Đia chỉ:</strong> {samplePay.user.address}</p>
                                            <p className="user-dateIsGood"><strong>Ngày Nhận:</strong> {samplePay.user.dateIsGood}</p>
                                            <p className="user-time"><strong>Giờ Nhận:</strong> {samplePay.user.time}</p>
                                            <p className="user-note"><strong>Ghi chú:</strong> {samplePay.user.note}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="order-summary order-summary--white no-border">
                                        <div className="order-summary-header">
                                            <h4>Hình thức thanh toán</h4>
                                        </div>
                                        <div className="summary-section no-border no-padding-top">
                                            <span><strong>{samplePay.thanhtoan.pay}</strong></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="order-summary order-summary--white no-border">
                                        <div className="order-summary-header">
                                            <h4>Hình thức vận chuyển</h4>
                                        </div>
                                        <div className="summary-section no-border no-padding-top">
                                            <span><strong>{samplePay.thanhtoan.transport}</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-success unprint">
                                <div className="btn btn-primary btn-lg" onClick={this.handleOrderCart.bind(this)}>
                                    Tiến hành đặt hàng
                                </div>
                                <a onClick={window.print} className="nounderline print-link" href="javascript:void(0)">
                                    <div className="print-link__block clearfix">
                                        <i className="fa fa-print icon-print" aria-hidden="true"/> In
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({cart: state.cart});
const mapDispatchToProps = dispatch => bindActionCreators({requestOrderCart}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
