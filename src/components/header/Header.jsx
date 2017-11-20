import PropTypes from 'prop-types';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Flexbox } from '../common/index';
import { Tabs, Tab } from 'react-tabify';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header () {
    return (
        <div style={{textAlign: 'center'}}>
            <header>
                <Navbar collapseOnSelect>
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
                            <LinkContainer to="/login">
                                <NavItem eventKey={6}>
                                    <span className="glyphicon glyphicon-user" aria-hidden="true"/>
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <NavItem eventKey={6}>
                                    <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"/>
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
    );
}
