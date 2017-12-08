import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import {requestApiData, requestCounter} from '../../redux/actions/actions';

import ModalView from './template/modal';

let listproduct = [{index: 0, name: 'index_0', price: 29.00, quantity: 1, color: 'cam', size: 39, sticker: 'new', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/xanhduonglunartempo2runningsho-1ce74df5-7f8c-428e-a38c-66dcefd07a77.jpg?v=1500949649283'},
    {index: 1, name: 'index_1', price: 28.00, quantity: 1, color: 'cam', size: 39, sticker: 'discount', sale: '21%', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/tranglunarglide7runningshoe1.jpg?v=1500949648220'},
    {index: 3, name: 'index_3', price: 22.00, quantity: 1, color: 'cam', size: 39, sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/hongdenfreetr6printtrainingsho-4af1e0ed-369c-4534-a1f9-3da4df1bc67a.jpg?v=1500949644597'},
    {index: 4, name: 'index_4', price: 27.00, quantity: 1, color: 'cam', size: 39, sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/xanhduongfreetr5printtrainings-6d620e3d-9f17-4708-a70d-6381747e224d.jpg?v=1500949643490'},
    {index: 5, name: 'index_5', price: 25.00, quantity: 1, color: 'cam', size: 39, sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/timfreernflyknitrunningshoe1.jpg?v=1500949642413'},
    {index: 6, name: 'index_6', price: 26.00, quantity: 1, color: 'cam', size: 39, sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/hongflyknitairmaxrunningshoe1.jpg?v=1500949641410'},
    {index: 7, name: 'index_7', price: 21.00, quantity: 1, color: 'cam', size: 39, sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/hongairzoomelite8runningshoe1.jpg?v=1500949636697'}
];
let item_addcart = {index: 0, name: 'index_0', price: '$29.00', sticker: 'new', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/xanhduonglunartempo2runningsho-1ce74df5-7f8c-428e-a38c-66dcefd07a77.jpg?v=1500949649283'};
class Products extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
    }
    render () {
        let {match} = this.props;
        /* console.log(match); */
        const ListItems = Object.values(listproduct).map((item, key) => {
            let sticker;
            if (item.sticker === 'new') {
                sticker = <div className="sticker sticker-new"/>;
            } else if (item.sticker === 'discount') {
                sticker = <div> <div className="sticker sticker-discount">{item.sale}</div> <div className="pi-price-old">$29.00</div></div>;
            } else { sticker = ''; }
            return (
                <div key={key} className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <div className="product-item">
                        <div className="pi-img-wrapper">
                            <img src={item.link} className="img-responsive" alt="xanhduonglunartempo"/>
                            <Link to={`${match.url}products/${item.name}`} params={item} className="show-detail" title={item.name}></Link>
                            <ModalView item={item}/>
                        </div>
                        <h3><Link to={`${match.url}products/${item.name}`} params={item} className="show-detail" title={item.name}>{item.name}</Link></h3>
                        <div className="pi-price">${item.price}</div>
                        {sticker}
                        {/* <a href="javascript:void(0);" className="btn add2cart" >Add to cart</a> */}
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

const mapStateToProps = state => ({data: state.data, counter: state.counter, cart: state.cart});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
