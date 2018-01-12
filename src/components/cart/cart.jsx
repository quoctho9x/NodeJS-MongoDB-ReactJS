import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestAddtocart, requestUpdateitemcart, requestRemoveitemcart} from '../../redux/actions/action_addtocart';

class Cart extends React.Component {
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
    removeItem (item) {
        this.props.requestRemoveitemcart({item});
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
                            <Link to={`products/${item.index}`} className="thumbnail" title={item.name}>
                                <img src={item.link} className="media-object img-responsive" alt="xanhduonglunartempo"/>
                            </Link>
                            <div className="detail-cart-content">
                                <h4 className="media-heading">
                                    <Link to={`products/${item.index}`} title={item.name}>
                                        {item.name}
                                    </Link>
                                </h4>
                                <h5 className="media-heading"> Màu sắc: {item.color}</h5>
                                <h5 className="media-heading"> size: {item.size}</h5>
                            </div>
                        </div></td>
                    <td className="center">
                        <input type="number" className="form-control input-number" min="1" onChange={this.getvalueinput.bind(this, item)} value={item.quantity}/>
                    </td>
                    <td className="text-center el-reponsive"><strong>${item.price}</strong></td>
                    <td className="text-center"><strong>${item.quantity * item.price}</strong></td>
                    <td className="text-center">
                        <button type="button" className="btn btn-danger btn-change-text" content=" Xóa" onClick={this.removeItem.bind(this, item)}>
                            <span className="glyphicon glyphicon-trash"/>
                        </button></td>
                </tr>
            );
        });
        return (
            <main className="main-contain">
                <div className="container">
                    <h1 className="header-title"> Chi Tiết Giỏ Hàng </h1>
                    <div className="">
                        <table className="table table-hover table-cart-list">
                            <thead>
                                <tr>
                                    <th>Sản Phẩm</th>
                                    <th>Số lượng</th>
                                    <th className="text-center el-reponsive">Giá</th>
                                    <th className="text-center">Tổng</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {ListItems}
                                <tr><td/><td/><td/><td/><td/></tr>
                            </tbody>
                        </table>
                        <div className="pull-right">
                            <h3>Tổng tiền : <strong>${total}</strong></h3>
                            <Link to="/">
                                <button type="button" className="btn btn-default mg_r30 btn-responsive">
                                    <span className="glyphicon glyphicon-shopping-cart"/> Tiếp tục mua hàng
                                </button>
                            </Link>
                            <button type="button" className="btn btn-success btn-responsive">
                                Đặt Hàng <span className="glyphicon glyphicon-play"/>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => ({cart: state.cart});
const mapDispatchToProps = dispatch => bindActionCreators({requestAddtocart, requestUpdateitemcart, requestRemoveitemcart}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
