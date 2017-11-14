import React from 'react';
import { Route, withRouter, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header/Header';
import About from './about/About';
import Topics from './topics/Topics';
import Home from './home/Home';
import Footer from './footer/Footer';
import { Bullet, Panel, Flexbox, Not404 } from './common';

function App () {
    return (
        <div style={{height: '100%', width: '100%'}}>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
                <Route component={Not404}/>
            </Switch>
            <Flexbox
                hAlignCenter={true}
                width="100%"
                style={{
                    flexWrap: 'wrap',
                    minWidth: 500
                }}>

            </Flexbox>
            <Footer/>
        </div>
    );
}

export default withRouter(App);
