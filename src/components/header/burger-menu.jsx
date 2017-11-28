import React from 'react';
import BurgerMenu from 'react-burger-menu';
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

    getItems () {
        let items = [
            <a key="0" href=""><i className="fa fa-fw fa-star-o"/><span>Favorites</span></a>,
            <a key="1" href=""><i className="fa fa-fw fa-bell-o"/><span>Alerts</span></a>,
            <a key="2" href=""><i className="fa fa-fw fa-envelope-o"/><span>Messages</span></a>,
            <a key="3" href=""><i className="fa fa-fw fa-comment-o"/><span>Comments</span></a>,
            <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o"/><span>Analytics</span></a>,
            <a key="5" href=""><i className="fa fa-fw fa-newspaper-o"/><span>Reading List</span></a>
        ];
        return items;
    }

    getMenu () {
        const Menu = BurgerMenu[this.state.currentMenu];
        const items = this.getItems();
        let jsx;

        if (this.state.side === 'right') {
            jsx = (
                <MenuWrap side={this.state.side}>
                    <Menu width={'250px'} id={this.state.currentMenu} pageWrapId={'page-wrap'}
                        outerContainerId={'outer-container'} right>
                        {items}
                    </Menu>
                </MenuWrap>
            );
        } else {
            jsx = (
                <MenuWrap>
                    <Menu width={'250px'} id={this.state.currentMenu} pageWrapId={'page-wrap'}
                        outerContainerId={'outer-container'}>
                        {items}
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
