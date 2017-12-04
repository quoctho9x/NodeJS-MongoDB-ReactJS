import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import DetailItem from './template/detail_item';
import Parent from '../sliders/slider_quickview';
import {requestApiData, requestCounter} from '../../redux/actions/actions';

export default class ProductDetail extends React.Component {
    render () {
        let {match} = this.props;
        return (
            <main className="main-contain">
                <div className="col-sx-12 col-ms-12 col-md-12 clearfix pd-none">
                    <Link to="/">
                        ve page home
                    </Link>
                </div>
                <div className="col-sx-12 col-ms-12 col-md-5 clearfix pd-none">
                    <Parent/>
                </div>
                <div className="col-sx-12 col-ms-12 col-md-5">
                    <DetailItem/>
                </div>
                <div className="col-sx-12 col-ms-12 col-md-2">
                    aaaaa
                </div>
            </main>
        );
    }
}
/* const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalView); */
