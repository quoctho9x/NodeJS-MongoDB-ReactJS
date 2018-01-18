import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestAddtocart, requestUpdateitemcart, requestRemoveitemcart} from '../../../redux/actions/action_addtocart';
import StepZilla from 'react-stepzilla';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
const steps =
    [
        {name: 'Thông Tin', component: <Step1 />},
        {name: 'Vận chuyển', component: <Step2 />},
        {name: 'Đặt hàng', component: <Step3 />}
    ];
class Order extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <main className="main-contain">
                <div className="container">
                    <div className="step-progress">
                        <StepZilla steps={steps} stepsNavigation={false} nextButtonText="Tiếp Tục" backButtonText="Quay lại" />
                    </div>
                </div>
            </main>
        );
    }
}
const mapStateToProps = state => ({cart: state.cart});
const mapDispatchToProps = dispatch => bindActionCreators({requestAddtocart, requestUpdateitemcart, requestRemoveitemcart}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Order);
