import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {requestGetAllProducts} from '../../redux/actions/action_products';

class ProductRelate extends React.Component {
    componentWillMount () {
        // goi api lay list san pham
        /*this.props.requestGetAllProducts();*/
    }
    render () {
        let {match, products} = this.props;
        if (products.loading || Object.constructor === products) {
            return (
                <div id="content-end">
                    <i className="fa fa-spinner fa-spin fa-4x animated" />
                </div>
            );
        }
        const ListItems = Object.values(products.all.products).map((item, key) => {
            if (key >= 5) return false;
            let sticker;
            if (item.sticker === 'discount') {
                sticker = <span className="price-old-related flexbox-content">$29.00</span>;
            } else { sticker = ''; }
            return (
                <li key={key} className="product-item-wrapper">
                    <div className="image-product-relate">
                        <Link to={`/products/${item.index}`} className="show-detail" title={item.name}>
                            <img src={item.link} className="img-responsive" alt="xanhduonglunartempo"/>
                        </Link>
                    </div>
                    <div className="content-product-relate">
                        <Link to={`/products/${item.index}`} className="show-detail" title={item.name}>
                            <h3 className="product-title">{item.name}</h3>
                            <p className="product-box-price-related clearfix flexbox-grid-default">
                                <span className="price-new-related flexbox-auto mr10 text-left">${item.price} </span>
                                {sticker}
                            </p>
                        </Link>
                    </div>
                </li>
            );
        });
        return (
            <div className="box-product-relate">
                <div className="title-group-related">
                    <h2 className="title-group">
                        Sản phẩm liên quan
                    </h2>
                </div>
                <ul className="list-product-related clearfix">
                    {ListItems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({products: state.products});
const mapDispatchToProps = dispatch => bindActionCreators({ requestGetAllProducts}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductRelate);
