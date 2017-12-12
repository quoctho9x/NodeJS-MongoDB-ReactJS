import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import {requestApiData, requestCounter} from '../../redux/actions/actions';

import ModalView from './template/modal';

class Products extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
    }
    render () {
        let {match} = this.props;
        let {products_list = []} = this.props.data;
        const ListItems = Object.values(products_list).map((item, key) => {
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
                {products_list.length === 0 ? <h1>loading...</h1> : ListItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({data: state.data, counter: state.counter, cart: state.cart});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
