import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import DetailItem from './template/detail_item';
import Parent from '../sliders/slider_quickview';
import {Tabs} from '../common/index';
import {requestApiData, requestCounter} from '../../redux/actions/actions';

let listproduct = [
    {index: 1, name: 'index_1', price: '$28.00', sticker: 'discount', sale: '21%', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/tranglunarglide7runningshoe1.jpg?v=1500949648220'},
    {index: 2, name: 'index_2', price: '$27.00', sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/camfreetr6spectrumtrainingshoe-3cef5c47-80d3-454d-82cd-a2701293fff0.jpg?v=1500949645817'},
    {index: 3, name: 'index_3', price: '$26.00', sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/hongdenfreetr6printtrainingsho-4af1e0ed-369c-4534-a1f9-3da4df1bc67a.jpg?v=1500949644597'},
    {index: 4, name: 'index_4', price: '$25.00', sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/xanhduongfreetr5printtrainings-6d620e3d-9f17-4708-a70d-6381747e224d.jpg?v=1500949643490'},
    {index: 5, name: 'index_5', price: '$24.00', sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/timfreernflyknitrunningshoe1.jpg?v=1500949642413'},
    {index: 6, name: 'index_6', price: '$23.00', sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/hongflyknitairmaxrunningshoe1.jpg?v=1500949641410'},
    {index: 7, name: 'index_7', price: '$22.00', sticker: '', link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/hongairzoomelite8runningshoe1.jpg?v=1500949636697'}
];
export default class ProductRelate extends React.Component {
    render () {
        let {match} = this.props;
        const ListItems = Object.values(listproduct).map((item, key) => {
            let sticker;
            if (item.sticker === 'discount') {
                sticker = <span className="price-old-related flexbox-content">$29.00</span>;
            } else { sticker = ''; }
            return (
                <li key={key} className="product-item-wrapper">
                    <div className="image-product-relate">
                        <Link to={`/products/${item.name}`} className="show-detail" title={item.name}>
                            <img src={item.link} className="img-responsive" alt="xanhduonglunartempo"/>
                        </Link>
                    </div>
                    <div className="content-product-relate">
                        <Link to={`/products/${item.name}`} className="show-detail" title={item.name}>
                            <h3 className="product-title">{item.name}</h3>
                            <p className="product-box-price-related clearfix flexbox-grid-default">
                                <span className="price-new-related flexbox-auto mr10 text-left">{item.price}</span>
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

/* const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalView); */
