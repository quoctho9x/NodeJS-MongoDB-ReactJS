import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import ModalView from './modal';
class Products extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
    }

    render () {
        return (
            <div className="row box-product-lists">
                <div className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <div className="product-item">
                        <div className="pi-img-wrapper">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/products/xanhduonglunartempo2runningsho-1ce74df5-7f8c-428e-a38c-66dcefd07a77.jpg?v=1500949649283" className="img-responsive" alt="xanhduonglunartempo"/>
                            <a href="javascript:void(0);" className="show-detail">
                                <ModalView/>
                                {/*<span href="#" className="btn">Quick view</span>*/}
                            </a>
                        </div>
                        <h3><a href="javascript:void(0);">Berry Lace Dress</a></h3>
                        <div className="pi-price">$29.00</div>
                        <a href="javascript:void(0);" className="btn add2cart">Add to cart</a>
                        <div className="sticker sticker-new"/>
                    </div>
                </div>
                <div className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <div className="product-item">
                        <div className="pi-img-wrapper">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/products/tranglunarglide7runningshoe1.jpg?v=1500949648220" className="img-responsive" alt="tranglunarglide"/>
                            <a href="javascript:void(0);" className="show-detail">
                                <ModalView/>
                                {/*<span href="#" className="btn">Quick view</span>*/}
                            </a>
                        </div>
                        <h3><a href="javascript:void(0);">Berry Lace Dress</a></h3>
                        <div className="pi-price">$29.00</div>
                        <div className="pi-price-old">$29.00</div>
                        <a href="javascript:void(0);" className="btn add2cart">Add to cart</a>
                        <div className="sticker sticker-discount">-21%</div>
                    </div>
                </div>
                <div className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <div className="product-item">
                        <div className="pi-img-wrapper">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/products/camfreetr6spectrumtrainingshoe-3cef5c47-80d3-454d-82cd-a2701293fff0.jpg?v=1500949645817" className="img-responsive" alt="camfreetr6spectrum"/>
                            <a href="javascript:void(0);" className="show-detail">
                                <ModalView/>
                                {/*<span href="#" className="btn">Quick view</span>*/}
                            </a>
                        </div>
                        <h3><a href="javascript:void(0);">Berry Lace Dress</a></h3>
                        <div className="pi-price">$29.00</div>
                        <a href="javascript:void(0);" className="btn add2cart">Add to cart</a>
                    </div>
                </div>
                <div className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <div className="product-item">
                        <div className="pi-img-wrapper">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/products/hongdenfreetr6printtrainingsho-4af1e0ed-369c-4534-a1f9-3da4df1bc67a.jpg?v=1500949644597" className="img-responsive" alt="hongdenfreet"/>
                            <a href="javascript:void(0);" className="show-detail">
                                <ModalView/>
                                {/*<span href="#" className="btn">Quick view</span>*/}
                            </a>
                        </div>
                        <h3><a href="javascript:void(0);">Berry Lace Dress</a></h3>
                        <div className="pi-price">$29.00</div>
                        <a href="javascript:void(0);" className="btn add2cart">Add to cart</a>
                    </div>
                </div>
                <div className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <div className="product-item">
                        <div className="pi-img-wrapper">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/products/xanhduongfreetr5printtrainings-6d620e3d-9f17-4708-a70d-6381747e224d.jpg?v=1500949643490" className="img-responsive" alt="xanhduongfree"/>
                            <a href="javascript:void(0);" className="show-detail">
                                <ModalView/>
                                {/*<span href="#" className="btn">Quick view</span>*/}
                            </a>
                        </div>
                        <h3><a href="javascript:void(0);">Berry Lace Dress</a></h3>
                        <div className="pi-price">$29.00</div>
                        <a href="javascript:void(0);" className="btn add2cart">Add to cart</a>
                    </div>
                </div>
                <div className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <div className="product-item">
                        <div className="pi-img-wrapper">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/products/timfreernflyknitrunningshoe1.jpg?v=1500949642413" className="img-responsive" alt="timfreernflyk"/>
                            <a href="javascript:void(0);" className="show-detail">
                                <ModalView/>
                                {/*<span href="#" className="btn">Quick view</span>*/}
                            </a>
                        </div>
                        <h3><a href="javascript:void(0);">Berry Lace Dress</a></h3>
                        <div className="pi-price">$29.00</div>
                        <a href="javascript:void(0);" className="btn add2cart">Add to cart</a>
                    </div>
                </div>
                <div className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <div className="product-item">
                        <div className="pi-img-wrapper">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/products/hongflyknitairmaxrunningshoe1.jpg?v=1500949641410" className="img-responsive" alt="hongflykni"/>
                            <a href="javascript:void(0);" className="show-detail">
                                <ModalView/>
                                {/*<span href="#" className="btn">Quick view</span>*/}
                            </a>
                        </div>
                        <h3><a href="javascript:void(0);">Berry Lace Dress</a></h3>
                        <div className="pi-price">$29.00</div>
                        <a href="javascript:void(0);" className="btn add2cart">Add to cart</a>
                    </div>
                </div>
                <div className="product-item-wrapper col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <div className="product-item">
                        <div className="pi-img-wrapper">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/products/hongairzoomelite8runningshoe1.jpg?v=1500949636697" className="img-responsive" alt="hongairzoomelite"/>
                            <a href="javascript:void(0);" className="show-detail">
                                <ModalView/>
                                {/*<span href="#" className="btn">Quick view</span>*/}
                            </a>
                        </div>
                        <h3><a href="javascript:void(0);">Berry Lace Dress</a></h3>
                        <div className="pi-price">$29.00</div>
                        <a href="javascript:void(0);" className="btn add2cart">Add to cart</a>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
