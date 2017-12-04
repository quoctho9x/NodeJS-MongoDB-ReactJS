import React from 'react';
import BurgerMenu from 'react-burger-menu';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';

export default class Burgermenu extends React.Component {
    render () {
        return (
            <main>
                <Demo child={this.props.children}/>
            </main>
        );
    }
}

class MenuWrap extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hidden: false
        };
    }

    render () {
        let style;

        if (this.state.hidden) {
            style = {display: 'none'};
        }
        return (
            <div style={style} className={this.props.side}>
                {this.props.children}
            </div>
        );
    }
}

class Demo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentMenu: 'push',
            side       : 'left'
        };
    }

    getMenu () {
        const Menu = BurgerMenu[this.state.currentMenu];
        let jsx;

        if (this.state.side === 'right') {
            jsx = (
                <MenuWrap side={this.state.side}>
                    <Menu width={'250px'} id={this.state.currentMenu} pageWrapId={'page-wrap'}
                        outerContainerId={'outer-container'} right>
                        <Items/>
                    </Menu>
                </MenuWrap>
            );
        } else {
            jsx = (
                <MenuWrap>
                    <Menu width={'250px'} id={this.state.currentMenu} pageWrapId={'page-wrap'}
                        outerContainerId={'outer-container'}>
                        <Items/>
                    </Menu>
                </MenuWrap>
            );
        }
        return jsx;
    }

    render () {
        return (
            <div id="outer-container" style={{height: '100%'}}>
                {this.getMenu()}
                <main id="page-wrap">
                    {this.props.child}
                </main>
            </div>
        );
    }
}

class Items extends React.Component {
    render () {
        return (
            <div id="menu-mobile">
                <div className="clearfix">
                    <div className="account_mobile" >
                        <div className="text-center">
                            aaaaa
                        </div>
                        <ul className="account_text text-center">

                            <li>
                                <Link to="/login">
                                    <span className="glyphicon glyphicon-user" aria-hidden="true"/>Đăng
                                    nhập
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link to="/login">
                                    <span className="glyphicon glyphicon-user" aria-hidden="true"/>Đăng
                                    nhập
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <ul className="menu-mobile">

                        <li className="current">
                            <Link to="/">
                                <span className="glyphicon glyphicon-user" aria-hidden="true"/>Trang chủ
                            </Link>
                        </li>

                        <li className="">
                            <Link to="/about">
                                <span className="glyphicon glyphicon-user" aria-hidden="true"/>Giới thiệu
                            </Link>
                        </li>

                        <li className="active">
                            <a href="javascript:void(0);" title="Giày nam">Giày nam <i
                                className="fa fa-angle-right"/></a>
                            <ul className="dropdown-menu submenu-level1-children" role="menu" >

                                <li className="current">
                                    <Link to="/topics">
                                        <span className="glyphicon glyphicon-user" aria-hidden="true"/>topics
                                    </Link>
                                </li>

                                <li className="current">
                                    <Link to="/news">
                                        <span className="glyphicon glyphicon-user" aria-hidden="true"/>Tin tức
                                    </Link>
                                </li>

                                <li className="current">
                                    <a href="/" className="current" title="Basketball">Basketball</a>
                                </li>

                                <li className="current">
                                    <a href="/" className="current" title="Football">Football</a>
                                </li>

                                <li className="current">
                                    <a href="/" className="current" title="Gym &amp; Training">Gym &amp; Training</a>
                                </li>

                                <li className="current">
                                    <a href="/" className="current" title="Skateboarding">Skateboarding</a>
                                </li>

                                <li className="current">
                                    <a href="/" className="current" title="Tennis">Tennis</a>
                                </li>

                            </ul>
                        </li>

                        <li className="current">
                            <Link to="/topics">
                                <span className="glyphicon glyphicon-user" aria-hidden="true"/>topics
                            </Link>
                        </li>

                        <li className="current">
                            <Link to="/news">
                                <span className="glyphicon glyphicon-user" aria-hidden="true"/>Tin tức
                            </Link>
                        </li>

                        <li className="current">
                            <Link to="/contacts">
                                <span className="glyphicon glyphicon-user" aria-hidden="true"/>Liên hệ
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}
