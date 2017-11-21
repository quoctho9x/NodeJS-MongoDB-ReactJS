import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import Slider from 'react-slick';
class SliderVertical extends React.Component {
    componentDidMount () {
    }
    render () {
        const settings = {
            dots           : true,
            arrows         : true,
            infinite       : false,
            slidesToShow   : 3,
            slidesToScroll : 1,
            vertical       : true,
            verticalSwiping: true,
            beforeChange   : function (currentSlide, nextSlide) {
                console.log('before change', currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                console.log('after change', currentSlide);
            }
        };
        return (
            <Slider {...settings}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </Slider>
        );
    }
}
const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SliderVertical);
