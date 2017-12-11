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
        this.props.requestUpdateitemcart({item, value});
    }
    removeItem (item) {
        this.props.requestRemoveitemcart({item});
    }
    render () {
        let {cart, match} = this.props;
        let length = 0, total = 0;
        /* if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('domain', JSON.stringify(cart));
        } else {
            document.write('Trình duyệt của bạn không hỗ trợ local storage');
        }

        if (typeof (Storage) !== 'undefined') {
            let domain = localStorage.getItem('domain');
            console.log(JSON.parse(domain)); // kết quả freetuts.net
        } else {
            document.write('Trình duyệt của bạn không hỗ trợ local storage');
        } */
        const ListItems = Object.values(cart).map((item, key) => {
            length += item.quantity;
            total += item.quantity * item.price;
            return (
                <tr key={key}>
                    <td className="col-sm-8 col-md-6">
                        <div className="media">
                            <Link to={`products/${item.name}`} className="thumbnail" title={item.name}>
                                <img src={item.link} className="media-object img-responsive" alt="xanhduonglunartempo"/>
                            </Link>
                            <div className="media-body">
                                <h4 className="media-heading"><a href="#">{item.name}</a></h4>
                                <h5 className="media-heading"> color: {item.color}</h5>
                                <h5 className="media-heading"> size: {item.size}</h5>
                                <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                            </div>
                        </div></td>
                    <td className="col-sm-1 col-md-1 center">
                        <input type="number" className="form-control" min="1" onChange={this.getvalueinput.bind(this, item)} value={item.quantity}/>
                    </td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>${item.price}</strong></td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>${item.quantity * item.price}</strong></td>
                    <td className="col-sm-1 col-md-1">
                        <button type="button" className="btn btn-danger" onClick={this.removeItem.bind(this, item)}>
                            <span className="glyphicon glyphicon-remove"/> Remove
                        </button></td>
                </tr>
            );
        });
        return (
            <main className="main-contain">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-10 col-md-offset-1">
                            <table className="table table-hover table-cart-list">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Total</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ListItems}
                                    {/* <tr>
                                        <td className="col-sm-8 col-md-6">
                                            <div className="media">
                                                <a className="thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"/></a>
                                                <div className="media-body">
                                                    <h4 className="media-heading"><a href="#">Product name</a></h4>
                                                    <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
                                                    <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                                                </div>
                                            </div></td>
                                        <td className="col-sm-1 col-md-1 center">
                                            <input type="email" className="form-control" id="exampleInputEmail1" defaultValue="3"/>
                                        </td>
                                        <td className="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                                        <td className="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                                        <td className="col-sm-1 col-md-1">
                                            <button type="button" className="btn btn-danger">
                                                <span className="glyphicon glyphicon-remove"/> Remove
                                            </button></td>
                                    </tr>
                                    <tr>
                                        <td className="col-md-6">
                                            <div className="media">
                                                <a className="thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"/> </a>
                                                <div className="media-body">
                                                    <h4 className="media-heading"><a href="#">Product name</a></h4>
                                                    <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
                                                    <span>Status: </span><span className="text-warning"><strong>Leaves warehouse in 2 - 3 weeks</strong></span>
                                                </div>
                                            </div></td>
                                        <td className="col-md-1 center">
                                            <input type="email" className="form-control" id="exampleInputEmail1" defaultValue="2"/>
                                        </td>
                                        <td className="col-md-1 text-center"><strong>$4.99</strong></td>
                                        <td className="col-md-1 text-center"><strong>$9.98</strong></td>
                                        <td className="col-md-1">
                                            <button type="button" className="btn btn-danger">
                                                <span className="glyphicon glyphicon-remove"/> Remove
                                            </button></td>
                                    </tr>
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>   </td>
                                        <td><h5>Subtotal</h5></td>
                                        <td className="text-right"><h5><strong>{Subtotal}</strong></h5></td>
                                    </tr>
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>   </td>
                                        <td><h5>Estimated shipping</h5></td>
                                        <td className="text-right"><h5><strong>$6.94</strong></h5></td>
                                    </tr> */}
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>   </td>
                                        <td><h3>Total</h3></td>
                                        <td className="text-right"><h3><strong>${total}</strong></h3></td>
                                    </tr>
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>
                                            <button type="button" className="btn btn-default">
                                                <span className="glyphicon glyphicon-shopping-cart"/> Continue Shopping
                                            </button></td>
                                        <td>
                                            <button type="button" className="btn btn-success">
                                            Checkout <span className="glyphicon glyphicon-play"/>
                                            </button></td>
                                    </tr>
                                </tbody>
                            </table>
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
