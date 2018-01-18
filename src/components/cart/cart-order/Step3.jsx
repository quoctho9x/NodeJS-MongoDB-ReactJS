import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestAddtocart, requestUpdateitemcart, requestRemoveitemcart} from '../../../redux/actions/action_addtocart';

class Step3 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            total: 0
        };
    }
    getvalueinput (item, e) {
        let value = e.target.value;
        if (value <= 0) {
            value = 1;
            e.target.value = 1;
        }
        this.props.requestUpdateitemcart({item, value});
    }
    render () {
        let {cart, match} = this.props;
        let length = 0, total = 0;
        const ListItems = Object.values(cart).map((item, key) => {
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
                                Một email xác nhận đã được gửi tới quoctho9x@gmail.com. Xin vui lòng kiểm tra email của bạn
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5 order-info">
                        <table className="table table-hover table-cart-list">
                            <thead>
                                <tr>
                                    <th>Sản Phẩm</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ListItems}
                                <tr>
                                    <td>
                                        <h5>Tạm tính : <strong>${total}</strong></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>phí vận chuyển : <strong>${total}</strong></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>Tổng tiền : <strong>${total}</strong></h3>
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
                                            <p className="address-name">address-name</p>
                                            <p className="address-address">address-address</p>
                                            <p className="address-phone">address-phone</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <div className="order-summary order-summary--white no-border">
                                        <div className="order-summary-header">
                                            <h4>Thông tin thanh toán</h4>
                                        </div>
                                        <div className="summary-section no-border no-padding-top">
                                            <p className="address-name">address-name</p>
                                            <p className="address-address">address-name</p>
                                            <p className="address-phone">address-phone</p>
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
                                            <span>Thanh toán khi giao hàng (COD)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="order-summary order-summary--white no-border">
                                        <div className="order-summary-header">
                                            <h4>Hình thức vận chuyển</h4>
                                        </div>
                                        <div className="summary-section no-border no-padding-top">
                                            <span>Giao hàng tận nơi - 40.000₫</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-success unprint">
                                <Link to="/" className="btn btn-primary btn-lg">
                                    Tiến hành đặt hàng
                                </Link>
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
const mapDispatchToProps = dispatch => bindActionCreators({requestAddtocart, requestUpdateitemcart, requestRemoveitemcart}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
