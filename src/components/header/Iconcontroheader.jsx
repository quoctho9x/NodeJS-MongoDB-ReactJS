import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import {requestAddtocart} from '../../redux/actions/action_addtocart';

class IconControlHeader extends React.Component {
    render () {
        let {cart, user} = this.props;
        let length = 0;
        Object.values(cart).map((item, key) => {
            length += item.quantity;
        });
        let countItem = (cart.length > 0) ? <span className="badge-custom">{length}</span> : '';
        const displayUserName = () => {
            return (user.status) ? 'wellcome ' + user.user.email : null;
        };
        return (
            <ul className="icon-control-header text-right">
                <li>
                    <Link to="/login">
                        {displayUserName()} <span className="glyphicon glyphicon-user" aria-hidden="true"/>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"/>
                        {countItem}
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <span>search</span>
                    </Link>
                </li>
            </ul>
        );
    }
}

const mapStateToProps = state => ({cart: state.cart, user: state.inforUser});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter, requestAddtocart}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IconControlHeader);
