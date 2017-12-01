import React from 'react';
import { Route, withRouter, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header/Header';
import About from './about/About';
import Contacts from './contacts/contacts';
import News from './news/news';
import Topics from './topics/Topics';
import Cart from './cart/cart';
import Login from './login/login';
import Home from './home/Home';
import Footer from './footer/Footer';
import Burgermenu from './header/burger-menu';
import { Bullet, Panel, Flexbox, Not404 } from './common';

function App () {
    return (
        <div style={{height: '100%', width: '100%'}}>
            <Burgermenu>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                    <Route path="/news" component={News}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route component={Not404}/>
                </Switch>
                {/*<Flexbox
                    hAlignCenter={true}
                    width="100%"
                    style={{
                        flexWrap: 'wrap',
                        minWidth: 500
                    }}>

                </Flexbox>*/}
                <Footer/>
            </Burgermenu>
        </div>
    );
}

export default withRouter(App);
