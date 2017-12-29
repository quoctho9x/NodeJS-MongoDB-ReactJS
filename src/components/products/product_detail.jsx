import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import DetailItem from './template/detail_item';
import Parent from '../sliders/slider_quickview';
import {Tabs, Loading} from '../common/index';
import ProductRelate from './product_relate';
import {FormGroup, Checkbox, Radio} from 'react-bootstrap';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import {requestGetAllProducts} from '../../redux/actions/action_products';

class ProductDetail extends React.Component {
    componentWillMount () {
        // goi api lay list san pham
        this.props.requestGetAllProducts();
    }
    render () {
        let {match, products} = this.props;
        let item_index = match.params.index;
        if (products.loading || Object.constructor === products) {
            return (
                <main className="main-contain">
                    <div className="row box-product-lists">
                        <Loading/>
                    </div>
                </main>
            );
        } else {
            const index = products.all.products.findIndex(x => x.index === parseInt(item_index));
            let item = products.all.products[index];
            if (item === undefined || item === null) {
                return (
                    <main className="main-contain">
                        <h3>khong tim thay sang pham : {match.params.index}</h3>
                    </main>
                );
            } else {
                return (
                    <main className="main-contain">
                        <div className="container">
                            <Link to="/">
                               ve page home
                            </Link>
                        </div>
                        <div className="container">
                            <div className="col-sx-12 col-ms-12 col-md-5 clearfix pd-none">
                                <Parent ImageLager={true} ImageZoom={1.6}/>
                            </div>
                            <div className="col-sx-12 col-ms-12 col-md-5">
                                <DetailItem item={item}/>
                            </div>
                            <div className="col-sx-12 col-ms-12 col-md-2">
                                {/*{match.params.index}*/}
                            </div>
                            <div className="col-sx-12 col-ms-12 col-md-8">
                                <Tabs Detail={Detail}/>
                            </div>
                            <div className="col-sx-12 col-ms-12 col-md-4">
                                <ProductRelate match={match}/>
                            </div>
                        </div>
                    </main>
                );
            }
        }
    }
}

class Detail extends React.Component {
    render () {
        return (
            <div>
                <div id="description" className="active">
                    <div className="container-fluid product-description-wrapper">
                        <p>Ba lô thời trang Juno cao cấp BL005.<br/></p>
                        <p><img src="//hstatic.net/969/1000003969/10/2015/12-25/dsc01609.jpg"/></p>
                        <p> Kiểu dáng trẻ trung, độc đáo và cá tính kết hợp cùng với chất liệu da tổng hợp chống thấm nước cao cấp,</p>
                        <p><img src="//hstatic.net/969/1000003969/10/2015/12-25/kem__3__86c53e91-0b9c-46e0-6dce-5049ab10e87b.jpg"/></p>
                        <p> BL005 thiết kế với nhiều khóa kéo nhỏ làm điểm nhấn và sự phối màu hài hòa độc đáo giúp chiếc balo không chỉ năng động mà còn xinh xắn đáng yêu và rất thời trang.</p>
                        <p><img src="//hstatic.net/969/1000003969/10/2015/12-25/kem__4__00d52687-b17f-469a-50b8-74ac6ac3a1e1.jpg"/></p>
                        <p>Mặt sau thiết kế với chất liệu da mềm mại, ngăn khóa kéo nhỏ tiện dụng và dây đeo lưng êm ái có thể điều chỉnh phù hợp với từng dáng người.</p>
                        <p><img src="//hstatic.net/969/1000003969/10/2015/12-25/kem__6__7e5313cf-4842-4522-55d5-4a09b88a9544.jpg"/></p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({products: state.products, data: state.data});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter, requestGetAllProducts}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
