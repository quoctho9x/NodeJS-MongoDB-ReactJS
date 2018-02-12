import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestAddtocart, requestUpdateitemcart, requestRemoveitemcart} from '../../../redux/actions/action_addtocart';
import StepZilla from 'react-stepzilla';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class Order extends React.Component {
    constructor (props) {
        super(props);
        this.samplePay = {
            cart     : {},
            user     : {},
            thanhtoan: {
                transport: 'Miễn phí (3-4ngày)',
                pay      : 'Thanh toán khi nhận hàng'
            },
        };
    }
    componentWillMount () {
        let {cart, user} = this.props;
        this.updateStore({cart: cart});
        if (user.loading) { return false; } else {
            let user_login = Object.assign({}, user.user);
            this.updateStore({ user: {
                name      : user_login.user_name,
                phone     : user_login.phone,
                email     : user_login.email,
                birthday  : user_login.birthday,
                address   : user_login.address,
                dateIsGood: '2018-01-01',
                time      : '9:00 to 10:00',
                note      : ''
            }
            });
        }
    }
    componentDidMount () {}
    componentWillReceiveProps (nextProps) {
        if (nextProps.user.loading) { return false; } else {
            let user_login = Object.assign({}, nextProps.user.user);
            // this.samplePay.user = user_login;
            this.updateStore({ user: {
                name      : user_login.user_name,
                phone     : user_login.phone,
                email     : user_login.email,
                birthday  : user_login.birthday,
                address   : user_login.address,
                dateIsGood: '2018-01-01',
                time      : '9:00 to 10:00',
                note      : ''
            }
            });
            // console.log('user login', user_login);
        }
    }

    componentWillUnmount () {}
    getStore () {
        return this.samplePay;
    }
    updateStore (update) {
        this.samplePay = {
            ...this.samplePay,
            ...update
        };
    }
    render () {
        let {user, history} = this.props;
         //console.log('order', this.props.history);
        const steps =
            [
                {name: 'Thông Tin', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u); }} />},
                {name: 'Vận chuyển', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u); }}/>},
                {name: 'Đặt hàng', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u); }} history ={history} />}
            ];
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
const mapStateToProps = state => ({cart: state.cart, user: state.inforUser});
const mapDispatchToProps = dispatch => bindActionCreators({requestAddtocart, requestUpdateitemcart, requestRemoveitemcart}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Order);
