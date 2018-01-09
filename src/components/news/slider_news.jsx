import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import Slider from 'react-slick';
import { Route, Link } from 'react-router-dom';
class SliderNews extends React.Component {
    componentDidMount () {
    }
    render () {
        const settings = {
            dots          : false,
            arrows        : false,
            infinite      : false,
            speed         : 500,
            slidesToShow  : 4,
            slidesToScroll: 4,
            responsive    : [{
                breakpoint: 1200,
                settings  : {
                    slidesToShow  : 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 768,
                settings  : {
                    slidesToShow  : 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings  : {
                    slidesToShow  : 1,
                    slidesToScroll: 1
                }
            }]
        };
        return (
            <Slider {...settings}>
                <div>
                    <div className="box-article-index">
                        <div className="article-image-index">
                            <Link to={'/news/1'} className="" title="Quên adidas NMD Raw Pink đắt đỏ đi">
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/articles/2.jpg?v=1507468735563" alt="Quên adidas NMD Raw Pink đắt đỏ đi, đôi sneaker màu hường này cũng yêu không kém mà giá rất phải chăng"/>
                            </Link>
                        </div>
                        <div className="article-description-index">
                            <Link to={'/news/1'} className="" title="Quên adidas NMD Raw Pink đắt đỏ đi">
                                <h3 className="article-title">Quên adidas NMD Raw Pink đắt đỏ đi, đôi sneaker màu hường này cũng yêu không kém mà giá rất phải chăng</h3>
                            </Link>
                            <div className="article-excerpt-index">
                                Quên adidas NMD 'Raw Pink' đắt đỏ đi, đôi sneaker màu 'hường' này cũng yêu không kém mà giá rất phải chăng
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="box-article-index">
                        <div className="article-image-index">
                            <Link to={'/news/2'} className="" title="Adidas AlphaBounce trở nên “hào nhoáng” hơn bao giờ hết với bộ sưu tập “ Phản quang”">
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/articles/adidas-alphabounce-reflective-pack-2.jpg?v=1507468568797" alt="Quên adidas NMD Raw Pink đắt đỏ đi, đôi sneaker màu hường này cũng yêu không kém mà giá rất phải chăng"/>
                            </Link>
                        </div>
                        <div className="article-description-index">
                            <Link to={'/news/2'} className="" title="Adidas AlphaBounce trở nên “hào nhoáng” hơn bao giờ hết với bộ sưu tập “ Phản quang”">
                                <h3 className="article-title">Adidas AlphaBounce trở nên “hào nhoáng” hơn bao giờ hết với bộ sưu tập “ Phản quang”</h3>
                            </Link>
                            <div className="article-excerpt-index">
                                Từ khi ra mắt với phần upper chỉ trên nền đen và trắng, adidas AlphaBounce giờ đây đã sẵn sàng kết hợp với những họa tiết sặc sỡ và chuyển đổi màu sắc XENO độc đáo.
                                AlphaBounce trở nên sáng sủa hơn bao giờ hết trong một gói...
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="box-article-index">
                        <div className="article-image-index">
                            <Link to={'/news/3'} className="" title="Adidas AlphaBounce trở nên “hào nhoáng” hơn bao giờ hết với bộ sưu tập “ Phản quang”">
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/articles/adidas-climacool-02-17-white-black-2.jpg?v=1507468364303" alt="Quên adidas NMD Raw Pink đắt đỏ đi, đôi sneaker màu hường này cũng yêu không kém mà giá rất phải chăng"/>
                            </Link>
                        </div>
                        <div className="article-description-index">
                            <Link to={'/news/3'} className="" title="Adidas ClimaCool 02/17">
                                <h3 className="article-title">Adidas ClimaCool 02/17</h3>
                            </Link>
                            <div className="article-excerpt-index">
                                Adidas đã mang lại hình ảnh ClimaCOOL cổ điển của họ từ đầu những năm 2000 vào mùa hè năm ngoái, nhưng không có nhiều ảnh hưởng như "ba sọc" mong đợi. Có lẽ đó là do sự nổi lên của NMD và Ultra Boost, nhưng bạn vẫn có...
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="box-article-index">
                        <div className="article-image-index">
                            <Link to={'/news/4'} className="" title="Nike ra mắt Air Max 97 Ultra “Triple Black”">
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/238/538/articles/pebeast-com-2fimage-2f2017-2f08-2fnike-air-max-97-ultra-triple-black-1.jpg?v=1507468151397" alt="Quên adidas NMD Raw Pink đắt đỏ đi, đôi sneaker màu hường này cũng yêu không kém mà giá rất phải chăng"/>
                            </Link>
                        </div>
                        <div className="article-description-index">
                            <Link to={'/news/4'} className="" title="Nike ra mắt Air Max 97 Ultra “Triple Black”">
                                <h3 className="article-title">Nike ra mắt Air Max 97 Ultra “Triple Black”</h3>
                            </Link>
                            <div className="article-excerpt-index">
                                Tháng trước, Nike đã chia sẻ các phiên bản "hiện đại hóa" của Air Max 97 Ultra được người hâm mộ yêu thích, dự kiến ​​sẽ phát hành vào mùa thu. Có vẻ như Nike đã phải ra mắt sớm hơn, với "Triple Black" trong số những phiên bản...
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}
const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SliderNews);
