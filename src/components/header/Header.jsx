import PropTypes from 'prop-types';
import React from 'react';
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
            style = {transform: 'translateY(-45px)'};
        }
        return (
            <div>
                <header>
                    <Navbar className="menu-head" style={style} collapseOnSelect fixedTop >
                        <MenuHead/>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Home</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <LinkContainer to="/about">
                                    <NavItem eventKey={1}>About</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/topics">
                                    <NavItem eventKey={2}>Topics</NavItem>
                                </LinkContainer>
                                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                                <LinkContainer to="/news">
                                    <NavItem eventKey={4}>News</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/contacts">
                                    <NavItem eventKey={5}>Contacts</NavItem>
                                </LinkContainer>
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

class IconControlHeader extends React.Component {
    render () {
        return (
            <ul className="icon-control-header text-right">
                <li>
                    <Link to="/login">
                        <span className="glyphicon glyphicon-user" aria-hidden="true"/>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"/>
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
