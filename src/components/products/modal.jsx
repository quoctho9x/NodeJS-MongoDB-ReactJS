import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData, requestCounter} from '../../redux/actions/actions';
import {ButtonToolbar, Button, Modal} from 'react-bootstrap';

export default class ModalView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {show: false};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    componentDidMount () {
    }
    showModal () {
        this.setState({ show: true });
    }

    hideModal () {
        this.setState({ show: false });
    }
    render () {
        return (
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.showModal}>
                    Quick view
                </Button>

                <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.hideModal}
                    bsSize="large"
                    aria-labelledby="contained-modal-title-lg"
                    dialogClassName="custom-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Nike Free Train Versatility</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="col-ms-12 col-md-5 clearfix">
                            <h4>Wrapped Text</h4>
                        </div>
                        <div className="col-md-7">
                            <p>cumque dolorem.</p>
                        </div>


                    </Modal.Body>
                </Modal>
            </ButtonToolbar>
        );
    }
}
/*const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalView);*/
