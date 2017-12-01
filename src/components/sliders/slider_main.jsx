import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import Slider from 'react-slick';
import image1 from '../../images/slide_index_1.jpg';
import image2 from '../../images/slide_index_2.jpg';
class SliderMain extends React.Component {
    componentDidMount () {
    }
    render () {
        let bg1 = {backgroundImage: `url(${image1})`};
        let bg2 = {backgroundImage: `url(${image2})`};
        let settings = {
            dots          : true,
            arrows        : false,
            infinite      : true,
            speed         : 500,
            slidesToShow  : 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className="item"><a href="javascript:void(0);"><div className="image-slider-main" style={bg1}></div></a></div>
                <div className="item"><a href="javascript:void(0);"><div className="image-slider-main" style={bg2}></div></a></div>
            </Slider>
        );
    }
}
const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SliderMain);
