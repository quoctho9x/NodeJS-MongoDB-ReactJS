import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import {requestGetProducts, requestGetAllProducts} from '../../redux/actions/action_products';
import {Loading, PanelFiter, TitleBlocks} from '../common/index';
import ModalView from '../products/template/modal';

class AllShoes extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            total       : 0,
            currentCount: 8,
            offset      : 4,
            list        : [],
            isFetching  : false
        };
    }
    componentWillMount () {
        // goi api lay list san pham
        this.props.requestGetAllProducts();
    }
    componentDidMount () {
    }
    componentWillReceiveProps (newProps) {
        let {products} = newProps;
        if (!products.loading || Object.constructor === products) {
            this.loadInitialContent(products.all.products, this.state.currentCount);
            this.setState({total: products.all.total});
            window.addEventListener('scroll', this.loadOnScroll);
        }
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this.loadOnScroll);
    }

    render () {
        let {match, products} = this.props;
        if (products.loading ) {
            return (
                <main className="main-contain App">
                    <div className="row box-product-lists">
                        <Loading background={true}/>
                    </div>
                </main>
            );
        } else {
            let sticker;
            let productType = 'all';
            // function return true if value in array
            const checkAvailability = (arr, val) => {
                if(val === 'all'){
                    return true;
                }else {return arr.some(arrVal => arrVal === val);}
            };
            // loop render items follow all.products
            const ListItems = Object.values(this.state.list).map((item, key) => {
                let status = checkAvailability(item.type, productType);
                // check type
                if (!status) { return; }
                // render item
                if (item.sticker === 'new') {
                    sticker = <div className="sticker sticker-new"/>;
                } else if (item.sticker === 'discount') {
                    let price_sale = Math.ceil(parseInt(item.price) + (parseInt(item.price) * parseInt(item.sale)) / 100);
                    sticker = <div>
                        <div className="sticker sticker-discount">{item.sale}%</div>
                        <div className="pi-price-old">${price_sale}</div>
                    </div>;
                } else {
                    sticker = '';
                }
                return (
                    <div key={key} className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                        <div className="product-item">
                            <div className="pi-img-wrapper">
                                <img src={item.link} className="img-responsive" alt="xanhduonglunartempo"/>
                                <Link to={`products/${item.index}`} className="show-detail" title={item.name}/>
                                <ModalView item={item}/>
                            </div>
                            <h3><Link to={`products/${item.index}`} params={item} className="show-detail"
                                      title={item.name}>{item.name}</Link></h3>
                            <div className="pi-price">${item.price}</div>
                            {sticker}
                        </div>
                    </div>
                );
            });
            return (
                <main className="main-contain App">
                    <div className="container">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <PanelFiter/>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="row box-product-lists">
                                <TitleBlocks name="Tất cả"/>
                                {ListItems}
                                {
                                    (this.state.currentCount !== this.state.total)
                                        ? <div id="content-end" onClick={e => this.forceLoadOnScroll()}>
                                            lay du lieu
                                        </div> : null
                                }
                            </div>
                        </div>

                    </div>

                </main>
            );
        }
    }
    forceLoadOnScroll () {

    }

    loadOnScroll = (e) =>{
        let {products} = this.props;
        if (this.state.currentCount === this.state.total) return;
        let el = document.getElementById('content-end');
        let rect = el.getBoundingClientRect();
        let isAtEnd = (rect.y <= (window.innerHeight || document.documentElement.clientHeight));
        if (isAtEnd) {
            // User at the end of content. load more content
            if (!this.state.isFetching) {
                this.setState({isFetching: true});

                // get content from server
                setTimeout(() => {
                    let count = this.state.currentCount + this.state.offset;
                    if(count >= this.state.total){count = this.state.total;}

                    if (this.state.currentCount !== this.state.total) {
                        this.setState({
                            isFetching  : false,
                            currentCount: count,
                            list        : [...this.state.list, ...products.all.products.slice(this.state.currentCount, count)]
                        });
                    }
                }, 500);
            }
        }
    };

    loadInitialContent (array,currentinit) {
        // Get content from server using your preferred method (like AJAX, relay)
        let ary = array.slice(0, currentinit);
        this.setState({list: ary});
    }
}

const mapStateToProps = state => ({products: state.products});
const mapDispatchToProps = dispatch => bindActionCreators({requestGetProducts, requestGetAllProducts}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllShoes);
