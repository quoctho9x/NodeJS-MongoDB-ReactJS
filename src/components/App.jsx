import React from 'react';
import { Route, withRouter, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {requestNotiClear} from '../redux/actions/action_notification';
import Header from './header/Header';
import About from './about/About';
import Contacts from './contacts/contacts';
import News from './news/news';
import Topics from './topics/Topics';
import Cart from './cart/cart';
import Login from './users/login';
import Account from './users/account';
import Home from './home/Home';
import Footer from './footer/Footer';
import ProductDetail from './products/product_detail';
import MenShoes from './catalog/MenShoes';
import WomenShoes from './catalog/WomenShoes';
import AllShoes from './catalog/AllShoes';
import Burgermenu from './header/burger-menu';
import { Bullet, Panel, Flexbox, Not404, ScrollButton } from './common';
import AlertContainer from 'react-alert'
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            user:false
        }
    }
    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'light',
        time: 5000,
        transition: 'scale'
    };
    showAlert = (msg,type,time=4000) => {
        this.msg.show(msg, {
            time: time,
            type: type
        })
    };
    componentDidMount(){
    }
    componentWillReceiveProps (newProps) {
      let {notification}= newProps;
        if( notification.status && notification.notification.show){
            this.showAlert(notification.notification.smg,notification.notification.type);
            newProps.requestNotiClear();
        }
    }
    render(){
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Burgermenu>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/topics" component={Topics}/>
                        <Route exact path="/news" component={News}/>
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/account" component={Account}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/products/:index" component={ProductDetail} />
                        <Route exact path="/menshoes" component={MenShoes} />
                        <Route exact path="/womenshoes" component={WomenShoes} />
                        <Route exact path="/allshoes" component={AllShoes} />
                        <Route component={Not404}/>
                    </Switch>
                    <ScrollButton scrollStepInPx="150" delayInMs="16.66"/>
                    <Footer/>
                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                </Burgermenu>
            </div>
        );
    }

}
const mapStateToProps = state => ({user: state.inforUser, notification: state.notification});
const mapDispatchToProps = dispatch => bindActionCreators({requestNotiClear}, dispatch);
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
