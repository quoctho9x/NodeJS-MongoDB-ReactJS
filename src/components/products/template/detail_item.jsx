import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../../redux/actions/actions';
import {requestAddtocart} from '../../../redux/actions/action_addtocart';

class DetailItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {selectedColor: 'cam', selectedSize: 38};
    }
    componentWillMount () {
        let {item} = this.props;
        this.setState({ selectedColor: item.color, selectedSize: item.size });
    }
    componentDidMount () {
    }
    handleAddToCart (item) {
        let {selectedColor, selectedSize} = this.state;
        item.color = selectedColor;
        item.size = parseInt(selectedSize);
        this.props.requestAddtocart(item);
    }
    handleOptionChangeColor (e) {
        this.setState({selectedColor: e.target.value});
    }
    handleOptionChangeSize (e) {
        this.setState({selectedSize: e.target.value});
    }
    render () {
        let {item} = this.props;
        return (
            <div className="details">
                <h3 className="product-title">{item.name}</h3>
                <div className="rating">
                    <div className="stars">
                        <span className="fa fa-star checked"/>
                        <span className="fa fa-star checked"/>
                        <span className="fa fa-star checked"/>
                        <span className="fa fa-star"/>
                        <span className="fa fa-star"/>
                    </div>
                    <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia
                    sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                <h4 className="price">current price: <span>${item.price}</span></h4>
                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                <div className="selector-wrapper flexbox-grid-default">
                    <label>Màu sắc:</label>
                    <ul className="clearfix style-variant-template">
                        <li>
                            <label><input type="radio" value="cam" defaultChecked={this.state.selectedColor === 'cam'} onClick={(e) => this.handleOptionChangeColor(e)} name="option1"/><span>Cam</span></label>
                        </li>
                        <li>
                            <label><input type="radio" value="do" defaultChecked={this.state.selectedColor === 'do'} onClick={(e) => this.handleOptionChangeColor(e)} name="option1"/><span>do</span></label>
                        </li>
                        <li>
                            <label><input type="radio" value="den" defaultChecked={this.state.selectedColor === 'den'} onClick={(e) => this.handleOptionChangeColor(e)} name="option1"/><span>den</span></label>
                        </li>
                    </ul>
                </div>
                <div className="selector-wrapper flexbox-grid-default">
                    <label>Kích thước:</label>
                    <ul className="clearfix style-variant-template">
                        <li>
                            <label><input type="radio" value="38" defaultChecked={this.state.selectedSize === 38} onClick={(e) => this.handleOptionChangeSize(e)} name="option2"/><span>38</span></label>
                        </li>
                        <li>
                            <label><input type="radio" value="39" defaultChecked={this.state.selectedSize === 39} onClick={(e) => this.handleOptionChangeSize(e)} name="option2"/><span>39</span></label>
                        </li>
                        <li>
                            <label><input type="radio" value="40" defaultChecked={this.state.selectedSize === 40} onClick={(e) => this.handleOptionChangeSize(e)} name="option2"/><span>40</span></label>
                        </li>
                        <li>
                            <label><input type="radio" value="41" defaultChecked={this.state.selectedSize === 41} onClick={(e) => this.handleOptionChangeSize(e)} name="option2"/><span>41</span></label>
                        </li>
                    </ul>
                </div>
                <div className="action">
                    <button className="btn-style-add addnow-quickview" onClick={this.handleAddToCart.bind(this, item)}>
                        <span className="icon_cart_btn"/>
                        <span>Thêm vào giỏ</span>
                    </button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter, requestAddtocart}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailItem);
