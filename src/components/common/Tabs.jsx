import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

export default class ControlledTabs extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            key: 1
        };
    }
    handleSelect (key) {
        this.setState({ key: key });
    }
    render () {
        var {Detail} = this.props;
        return (
            <Tabs activeKey={this.state.key} onSelect={(key) => { this.handleSelect(key); } } id="controlled-tab-example">
                <Tab eventKey={1} title="Mô tả sản phẩm"><Detail/></Tab>
                <Tab eventKey={2} title="Bình luận">not comment</Tab>
            </Tabs>
        );
    }
}
