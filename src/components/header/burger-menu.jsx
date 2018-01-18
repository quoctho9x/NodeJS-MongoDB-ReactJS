import React from 'react';
import BurgerMenu from 'react-burger-menu';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import Userburger from './User-burger-menu';
import avatar_default from '../../images/avatar_default.png';

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
    handleClick (e) {
        let self = e.target;
        let parent = self.closest('li');
        parent.querySelector('.dropdown-menu').classList.toggle('panel-show');
        if (self.classList.contains('fa-minus')) {
            self.classList.remove('fa-minus');
            self.classList.add('fa-plus');
        } else {
            self.classList.add('fa-minus');
            self.classList.remove('fa-plus');
        }
    }
    render () {
        return (
            <div id="menu-mobile">
                <div className="clearfix">
                    <div className="account_mobile" >
                        <Userburger/>
                    </div>
                    <ul className="menu-mobile">
                        <li className="current">
                            <Link to="/">
                                <span className="glyphicon glyphicon-home" aria-hidden="true"/>Trang chủ
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/about">
                                <span className="glyphicon glyphicon-list" aria-hidden="true"/>Giới thiệu
                            </Link>
                        </li>

                        <li className="active">
                            <a href="javascript:void(0);" title="Giày nam">
                                <span className="glyphicon glyphicon-comment" aria-hidden="true"/>Mục Lục
                                <i onClick={this.handleClick.bind(this)} className="fa fa-plus arrow-submenu"/>
                            </a>
                            <ul className="dropdown-menu submenu-level1-children" role="menu" >

                                <li className="current">
                                    <Link to="/allshoes">
                                        <span className="glyphicon glyphicon-comment" aria-hidden="true"/>Tất cả
                                    </Link>
                                </li>

                                <li className="current">
                                    <Link to="/menshoes">
                                        <span className="glyphicon glyphicon-user" aria-hidden="true"/>Giày Nam
                                    </Link>
                                </li>

                                <li className="current">
                                    <Link to="/womenshoes">
                                        <span className="glyphicon glyphicon-user" aria-hidden="true"/>Giày Nữ
                                    </Link>
                                </li>

                                <li className="current">
                                    <Link to="/news">
                                        <span className="glyphicon glyphicon-user" aria-hidden="true"/>Giầy thể thao
                                    </Link>
                                </li>

                                <li className="current">
                                    <Link to="/contacts">
                                        <span className="glyphicon glyphicon-user" aria-hidden="true"/>Dép lê
                                    </Link>
                                </li>

                            </ul>
                        </li>

                        <li className="current">
                            <Link to="/topics">
                                <span className="glyphicon glyphicon-comment" aria-hidden="true"/>topics
                            </Link>
                        </li>

                        <li className="current">
                            <Link to="/news">
                                <span className="glyphicon glyphicon-info-sign" aria-hidden="true"/>Tin tức
                            </Link>
                        </li>

                        <li className="current">
                            <Link to="/contacts">
                                <span className="glyphicon glyphicon-earphone" aria-hidden="true"/>Liên hệ
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}
