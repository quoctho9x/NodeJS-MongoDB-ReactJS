import PropTypes from 'prop-types';
import React from 'react';
import IconControlHeader from './Iconcontroheader';
import { Route, Link } from 'react-router-dom';
import { Flexbox } from '../common/index';
import { Tabs, Tab } from 'react-tabify';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../images/logo.png';
export default class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hiden: false
        };
    }
    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll (event) {
        let B = document.body; // IE 'quirks'
        let D = document.documentElement; // IE with doctype
        D = (D.clientHeight) ? D : B;
        if (D.scrollTop !== 0) {
            /* console.log('dang onscroll'); */
            this.setState({
                hiden: true
            });
        } else {
            /* console.log('dang o top'); */
            this.setState({
                hiden: false
            });
        }
    }
    render () {
        let style;
        if (this.state.hiden) {
            style = {transform: 'translateY(-55px)'};
        }
        return (
            <div>
                <header>
                    <Navbar className="menu-head" style={style} collapseOnSelect fixedTop >
                        <MenuHead/>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Trang chủ</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <LinkContainer to="/about">
                                    <NavItem eventKey={1}>Giới Thiệu</NavItem>
                                </LinkContainer>
                               {/* <LinkContainer to="/topics">
                                    <NavItem eventKey={2}>coming soon</NavItem>
                                </LinkContainer>*/}
                                <NavDropdown eventKey={3} title="Mục Lục" id="basic-nav-dropdown">
                                    <LinkContainer to="/allshoes">
                                        <NavItem eventKey={3.0}>Tất cả</NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/menshoes">
                                        <NavItem eventKey={3.1}>Giày Nam</NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/womenshoes">
                                        <NavItem eventKey={3.2}>Giày Nữ</NavItem>
                                    </LinkContainer>
                                    <MenuItem divider />
                                    <LinkContainer to="/topics">
                                        <NavItem eventKey={3.3}>Giầy thể thao</NavItem>
                                    </LinkContainer>
                                    <MenuItem divider />
                                    <LinkContainer to="/others">
                                        <NavItem eventKey={3.3}>Dép lê</NavItem>
                                    </LinkContainer>
                                    {/* <MenuItem eventKey={3.1} ><Link to="/">Giày Nam</Link></MenuItem> */}
                                    {/* <MenuItem eventKey={3.2}>Giày Nữ</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Giầy thể thao</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Dép lê</MenuItem> */}
                                </NavDropdown>
                                <LinkContainer to="/news">
                                    <NavItem eventKey={4}>Tin tức</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/contacts">
                                    <NavItem eventKey={5}>Liên hệ</NavItem>
                                </LinkContainer>
                                {/* <LinkContainer to="/account">
                                    <NavItem eventKey={6}>Account</NavItem>
                                </LinkContainer> */}
                            </Nav>
                            <Nav pullRight>
                                <IconControlHeader/>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        );
    }
}

class MenuHead extends React.Component {
    render () {
        return (
            <div className="logo-menu clearfix">
                <div className="col-xs-4 col-sm-4 col-md-4"/>
                <div className="col-xs-4 col-sm-4 col-md-4">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4">
                </div>
            </div>
        );
    }
}
