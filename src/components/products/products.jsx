import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import {requestGetAllProducts} from '../../redux/actions/action_products';
import {Loading} from '../common/index';
import ModalView from './template/modal';

class Products extends React.Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        // goi api lay list san pham
        this.props.requestGetAllProducts();
    }
    componentDidMount () {
    }
    render () {
        let {match, products} = this.props;
        // loading if products.loading == true
        if (products.loading || Object.constructor === products) {
            return (
                <div className="row box-product-lists">
                    <Loading/>
                </div>
            );
        } else {
            let countItem = 0;
            let sticker;
            let {productType, maxItem} = this.props;
            // function return true if value in array
            const checkAvailability = (arr, val) => {
                return arr.some(arrVal => arrVal === val);
            };
            // loop render items follow all.products
            const ListItems = Object.values(products.all.products).map((item, key) => {
                let status = checkAvailability(item.type, productType);
                // check type and maxItem
                if (!status || countItem >= maxItem) { return; }
                countItem++;
                // render item
                if (item.sticker === 'new') {
                    sticker = <div className="sticker sticker-new"/>;
                } else if (item.sticker === 'discount') {
                    let price_sale = Math.ceil(parseInt(item.price) + (parseInt(item.price) * parseInt(item.sale)) / 100);
                    sticker = <div> <div className="sticker sticker-discount">{item.sale}%</div> <div className="pi-price-old">${price_sale}</div></div>;
                } else { sticker = ''; }
                return (
                    <div key={key} className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                        <div className="product-item">
                            <div className="pi-img-wrapper">
                                <img src={item.link} className="img-responsive" alt="xanhduonglunartempo"/>
                                <Link to={`${match.url}products/${item.index}`} className="show-detail" title={item.name}></Link>
                                <ModalView item={item}/>
                            </div>
                            <h3><Link to={`${match.url}products/${item.name}`} params={item} className="show-detail" title={item.name}>{item.name}</Link></h3>
                            <div className="pi-price">${item.price}</div>
                            {sticker}
                        </div>
                    </div>
                );
            });
            return (
                <div className="row box-product-lists">
                    {ListItems}
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({products: state.products, counter: state.counter, cart: state.cart});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter, requestGetAllProducts}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
