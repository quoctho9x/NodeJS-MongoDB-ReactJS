import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../../redux/actions/actions';
import {requestAddtocart} from '../../../redux/actions/action_addtocart';

class DetailItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {selectedColor: '', selectedSize: 38};
    }
    componentWillMount () {
        let {item} = this.props;

        this.setState({ selectedColor: item.color[0], selectedSize: item.size[0] });
    }
    componentDidMount () {
    }
    componentWillReceiveProps (nextProps) {
        this.setState({selectedColor: nextProps.item.color[0]});
        this.setState({selectedSize: parseInt(nextProps.item.size[0])});
    }
    handleAddToCart (item) {
        var item_add = Object.assign({}, item);
        let {selectedColor, selectedSize} = this.state;
        item_add.color = selectedColor;
        item_add.size = parseInt(selectedSize);
        this.props.requestAddtocart(item_add);
    }
    handleOptionChangeColor (e) {
        this.setState({selectedColor: e.target.value});
    }
    handleOptionChangeSize (e) {
        this.setState({selectedSize: parseInt(e.target.value)});
    }
    render () {
        let {item} = this.props;
        const list_color = Object.values(item.color).map((color, key) => {
            return (
                <li key={key}>
                    <label><input type="radio" value={color} checked={this.state.selectedColor === color} onChange={(e) => this.handleOptionChangeColor(e)} name="color"/><span>{color}</span></label>
                </li>
            );
        });
        const list_size = Object.values(item.size).map((size, key) => {
            return (
                <li key={key}>
                    <label><input type="radio" value={size} checked={this.state.selectedSize === size} onChange={(e) => this.handleOptionChangeSize(e)} name="size"/><span>{size}</span></label>
                </li>
            );
        });
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
                    <span className="review-no">41 lược đánh giá</span>
                </div>
                <p className="product-description">{item.description}</p>
                <h4 className="price">Giá hiện tại: <span>${item.price}</span></h4>
                <p className="vote"><strong>91%</strong> người mua đã bình chọn <strong>(87 votes)</strong></p>
                <div className="selector-wrapper flexbox-grid-default">
                    <label>Màu sắc:</label>
                    <ul className="clearfix style-variant-template">
                        {list_color}
                    </ul>
                </div>
                <div className="selector-wrapper flexbox-grid-default">
                    <label>Kích thước:</label>
                    <ul className="clearfix style-variant-template">
                        {list_size}
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
