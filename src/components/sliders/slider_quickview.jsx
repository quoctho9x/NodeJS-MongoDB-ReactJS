import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import Slider from 'react-slick';
import { CSSTransitionGroup } from 'react-transition-group';
let images = [{index: 0, link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/xanhduonglunartempo2runningsho-1ce74df5-7f8c-428e-a38c-66dcefd07a77.jpg?v=1500949649283'},
    {index: 1, link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/tranglunarglide7runningshoe1.jpg?v=1500949648220'},
    {index: 2, link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/camfreetr6spectrumtrainingshoe-3cef5c47-80d3-454d-82cd-a2701293fff0.jpg?v=1500949645817'},
    {index: 3, link: 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/hongdenfreetr6printtrainingsho-4af1e0ed-369c-4534-a1f9-3da4df1bc67a.jpg?v=1500949644597'}
];
export default class Parent extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedFooter: 0
        };

        this.settings = {
            className     : 'slider_quickview',
            focusOnSelect : false,
            centerMode    : false,
            infinite      : false,
            slidesToShow  : 4,
            slidesToScroll: 4
        };
    }
    getDataImg (img) {
        // get img when child send to parent
        this.setState({
            selectedFooter: img
        });
    }
    render () {
        return (
            <div>
                <MainImg selectedFooter={this.state.selectedFooter} Zoom={this.props.ImageZoom} ImageLager={this.props.ImageLager} />
                <SimpleSlider settings={this.settings} defaultData={this.changeHandler} sendData={this.getDataImg.bind(this)}/>
            </div>
        );
    }
}

class SimpleSlider extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            activeId: 0
        };
        this.setActiveElement = this.setActiveElement.bind(this);
    }
    componentDidMount () {
        // send img to child from parent default
        this.props.sendData(images[0].link);
    }
    setActiveElement (id, link) {
        // send img to child from parent
        this.setState({activeId: id});
        this.props.sendData(link);
    }

    render () {
        // list item get api
        const ListItems = Object.values(images).map((item, key) => {
            return <div key={key} className={item.index === this.state.activeId ? 'slick-center' : ''}
                onClick={() => this.setActiveElement(item.index, item.link)}><img src={item.link} alt=""/></div>;
        });
        return (
            <Slider {...this.props.settings}>
                {ListItems}
            </Slider>
        );
    }
}

class MainImg extends React.Component {
    constructor (props) {
        super(props);
    }
    zoomIn (scale, e) {
        let photo = document.getElementById('photo');
        photo.style.transform = `scale(${scale})`;
        let img = document.getElementById('imgZoom');
        let event = e.nativeEvent;
        let posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
        let posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
        photo.style.transformOrigin = (posX / img.clientWidth) * 100 + '%' + (posY / img.clientHeight) * 100 + '%';
        /*  console.log('event.offsetX', event.offsetX);
         console.log('event.offsetY', event.offsetY);

         console.log('event.pageX', event.pageX);
         console.log('event.pageY', event.pageY);

         console.log('img.offsetLeft', img.offsetLeft);
         console.log('img.offsetTop', img.offsetTop);

      /* console.log('posX', posX);
         console.log('posX', posY);

         console.log('img.clientWidth', img.clientWidth);
         console.log('img.clientHeight', img.clientHeight);

        console.log('X mouse voi hinh', (posX / img.clientWidth) * 100);
        console.log('Y mouse voi hinh', (posY / img.clientHeight) * 100); */
    }
    zoomOut () {
        let photo = document.getElementById('photo');
        photo.style.transform = 'scale(1)';
    }
    render () {
        let imagedefault = 'https://bizweb.dktcdn.net/thumb/large/100/238/538/products/camfreetr6spectrumtrainingshoe-3cef5c47-80d3-454d-82cd-a2701293fff0.jpg?v=1500949645817';
        let image = this.props.selectedFooter === 0 ? imagedefault : this.props.selectedFooter;
        let style = {
            backgroundImage: `url(${image})`
        };

        let {Zoom, ImageLager} = this.props;
        let img;
        if (Zoom >= 1) {
            img = <div id="imgZoom" className="tile" data-scale="1.6" onMouseMove={this.zoomIn.bind(this, Zoom)} onMouseOut={this.zoomOut.bind(this)}>
                <div id="photo" style={style} className="photo"/>
            </div>;
        } else {
            img = <img src={image} alt=""/>;
        }
        let larger = ImageLager ? 'image-larger' : '';
        return (
            <div className= {`footer-container ${larger}`}>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    <div className ="item-header" key={this.props.selectedFooter} >
                        {img}
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}

/*

const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SliderVertical);
*/
