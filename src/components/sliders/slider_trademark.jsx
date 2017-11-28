import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import Slider from 'react-slick';
let images = [{index: 0, link: 'https://bizweb.dktcdn.net/100/238/538/themes/567558/assets/partner_3.png?1511165605245'},
    {index: 1, link: 'https://bizweb.dktcdn.net/100/238/538/themes/567558/assets/partner_4.png?1511165605245'},
    {index: 2, link: 'https://bizweb.dktcdn.net/100/238/538/themes/567558/assets/partner_5.png?1511165605245'},
    {index: 3, link: 'https://bizweb.dktcdn.net/100/238/538/themes/567558/assets/partner_6.png?1511165605245'},
    {index: 4, link: 'https://bizweb.dktcdn.net/100/238/538/themes/567558/assets/partner_7.png?1511165605245'},
    {index: 5, link: 'https://bizweb.dktcdn.net/100/238/538/themes/567558/assets/partner_8.png?1511165605245'},
    {index: 6, link: 'https://bizweb.dktcdn.net/100/238/538/themes/567558/assets/partner_9.png?1511165605245'},
    {index: 7, link: 'https://bizweb.dktcdn.net/100/238/538/themes/567558/assets/partner_10.png?1511165605245'},
    {index: 8, link: 'https://bizweb.dktcdn.net/100/238/538/themes/567558/assets/partner_2.png?1511165605245'}
];
class SliderTrademark extends React.Component {
    constructor (props) {
        super(props);
        this.settings = {
            className     : 'slider_trademark',
            arrows        : false,
            dots          : false,
            infinite      : false,
            slidesToShow  : 8,
            slidesToScroll: 8,
            responsive    : [{
                breakpoint: 1200,
                settings  : {
                    slidesToShow  : 6,
                    slidesToScroll: 6
                }
            }, {
                breakpoint: 768,
                settings  : {
                    slidesToShow  : 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 480,
                settings  : {
                    slidesToShow  : 2,
                    slidesToScroll: 2
                }
            }]
        };
    }
    render () {
        // list item get api
        const ListItems = Object.values(images).map((item, key) => {
            return <div key={key}><img src={item.link} alt=""/></div>;
        });
        return (
            <Slider {...this.settings}>
                {ListItems}
            </Slider>
        );
    }
}
const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SliderTrademark);
