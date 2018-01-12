import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ButtonToolbar, Button, Modal} from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import avatar_default from '../../images/avatar_default.png';
export default class ModalEdit extends React.Component {
    constructor (props) {
        super(props);
        this.state = {show: false};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    componentDidMount () {
    }
    showModal (e) {
        e.preventDefault();
        this.setState({ show: true });
        return false;
    }

    hideModal () {
        this.setState({ show: false });
    }
    render () {
        let {item} = this.props;
        return (
            <div>
                <button type="button" onClick={(e) => { this.showModal(e); }} className="update btn btn-primary btn-sm">
                    <span className="glyphicon glyphicon-pencil"> Edit</span>
                </button>

                <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.hideModal}
                    bsSize="small"
                    aria-labelledby="contained-modal-title-lg"
                    dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Chỉnh sửa thông tin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ImageUpload/>
                        <div className="form-group">
                            <label>Tên</label>
                            <input type="text" className="form-control" name="validate-text" defaultValue={'name'} placeholder="Name" required/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="validate-text" defaultValue={'Email'} placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <label>SDT</label>
                            <input type="text" className="form-control" name="validate-text" defaultValue={'Phone'} placeholder="Phone" required/>
                        </div>
                        <div className="form-group">
                            <label>Ngày sinh</label>
                            <input type="date" className="form-control" name="validate-text" defaultValue="2012-03-22" required/>
                        </div>
                        <div className="form-group">
                            <label>địa chỉ</label>
                            <input type="text" className="form-control" name="validate-text" defaultValue={'địa chỉ'} placeholder="Address" required/>
                        </div>
                        <div className="group-btn">
                            <button type="button" onClick={(e) => { this.hideModal(e); }} className=" btn btn-success btn-sm"><span className="glyphicon glyphicon-floppy-save"> Save</span></button>
                            <button type="button" onClick={(e) => { this.hideModal(e); }} className=" btn btn-primary btn-sm"><span className="glyphicon glyphicon-trash"> Cancel</span></button>
                        </div>

                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
class ImageUpload extends React.Component {
    constructor (props) {
        super(props);
        this.state = { preview: null, files: [], accepted: [], rejected: []};
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop (accepted, rejected) {
        if (accepted.length !== 0) {
            console.log('day la accepted : ', accepted);
            this.setState({ preview: accepted[0].preview});
        } else {
            console.log('day la rejected : ', rejected);
            alert('rejected');
            return false;
        }
    }

    render () {
        const { preview } = this.state;
        console.log(preview);
        return (
            <div className="upload-image">
                <Dropzone onDrop={(accepted, rejected) => { this.handleDrop(accepted, rejected); }} className="zone-image" multiple={false} accept="image/png,image/jpeg,image/jpg,image/tiff,image/gif" >
                    {({ isDragActive, isDragReject }) => {
                        if (isDragActive) {
                            return (<div className="message-image-upload allow">Allow</div>);
                        }
                        if (isDragReject) {
                            return (<div className="message-image-upload rejected">Rejected</div>);
                        }
                        return ' ';
                    }}
                </Dropzone>
                <img className="image-preview" src={ preview || avatar_default} alt="image preview" />

            </div>
        );
    }
}
/* const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData, requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalView); */
