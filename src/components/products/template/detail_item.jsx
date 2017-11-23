import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../../redux/actions/actions';

export default class DetailItem extends React.Component {
    render () {
        return (
            <div className="details">
                <h3 className="product-title">men's shoes fashion</h3>
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
                <h4 className="price">current price: <span>$180</span></h4>
                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                <div className="selector-wrapper flexbox-grid-default">
                    <label>Màu sắc:</label>
                    <ul className="clearfix style-variant-template">
                        <li>
                            <label><input defaultChecked="checked" type="radio" value="Cam" name="option1"/><span>Cam</span></label>
                        </li>
                        <li>
                            <label><input type="radio" value="do" name="option1"/><span>do</span></label>
                        </li>
                        <li>
                            <label><input type="radio" value="den" name="option1"/><span>den</span></label>
                        </li>
                    </ul>
                </div>
                <div className="selector-wrapper flexbox-grid-default">
                    <label>Kích thước:</label>
                    <ul className="clearfix style-variant-template">
                        <li>
                            <label><input defaultChecked="checked" type="radio" value="Cam" name="option2"/><span>38</span></label>
                        </li>
                        <li>
                            <label><input type="radio" value="Cam" name="option2"/><span>39</span></label>
                        </li>
                        <li>
                            <label><input type="radio" value="do" name="option2"/><span>40</span></label>
                        </li>
                        <li>
                            <label><input type="radio" value="den" name="option2"/><span>41</span></label>
                        </li>
                    </ul>
                </div>
                <div className="action">
                    <button className="btn-style-add addnow-quickview">
                        <span className="icon_cart_btn"/>
                        <span>Thêm vào giỏ</span>
                    </button>
                </div>
            </div>
        );
    }
}
/* const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalView); */
