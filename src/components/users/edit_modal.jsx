import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ButtonToolbar, Button, Modal} from 'react-bootstrap';
import {requestUserUpdate} from '../../redux/actions/actions_user';
import Dropzone from 'react-dropzone';
import avatar_default from '../../images/avatar_default.png';

class ModalEdit extends React.Component {
    constructor (props) {
        super(props);
        this.state = {show: false, user: [], image: null};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    componentDidMount () {
        let {user} = this.props;
        this.setState({ user: user });
    }
    componentWillReceiveProps (nextProps) {
        let {user} = nextProps;
        this.setState({ user: user });
    }
    showModal (e) {
        e.preventDefault();
        this.setState({ show: true });
        return false;
    }
    hideModal () {
        // hide and set state = props
        let {user} = this.props;
        this.setState({ show: false, user: user });
    }
    handleChange ({ target }) {
        // get element target to set value
        let user_new = Object.assign({}, this.state.user);
        let target_id = target.id;
        user_new[target_id] = target.value;
        this.setState({user: user_new});
    }

    hanldelUpdateUser () {
        let {user, image} = this.state;
        this.props.requestUserUpdate({user, image});
        // close modal
        this.hideModal();
    }
    getImage (file) {
        this.setState({
            image: file
        });
    }
    render () {
        let {user} = this.state;
        return (
            <div>
                <button type="button" onClick={(e) => { this.showModal(e); }} className="update btn btn-primary btn-sm">
                    <span className="glyphicon glyphicon-pencil"> Edit</span>
                </button>

                <Modal
                    show={this.state.show}
                    onHide={this.hideModal}
                    bsSize="small"
                    aria-labelledby="contained-modal-title-lg"
                    dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Chỉnh sửa thông tin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ImageUpload user_avatar={user.avatar} getImage={this.getImage.bind(this)}/>
                        <div className="form-group">
                            <label>Tên</label>
                            <input type="text" className="form-control" id="user_name" name="validate-text" readOnly value={user.user_name} placeholder="Name" required/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" id="email" name="validate-text" readOnly value={user.email} placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <label>SDT</label>
                            <input type="text" className="form-control" id="phone" name="validate-text" value={user.phone} onChange={this.handleChange.bind(this)} placeholder="Phone" required/>
                        </div>
                        <div className="form-group">
                            <label>Ngày sinh</label>
                            <input type="date" className="form-control" id="birthday" name="validate-text" value={user.birthday} onChange={this.handleChange.bind(this)} required/>
                        </div>
                        <div className="form-group">
                            <label>địa chỉ</label>
                            <input type="text" className="form-control" id="address" name="validate-text" value={user.address} onChange={this.handleChange.bind(this)} placeholder="Address" required/>
                        </div>
                        <div className="group-btn">
                            <button type="button" onClick={(e) => { this.hanldelUpdateUser(e); }} className=" btn btn-success btn-sm"><span className="glyphicon glyphicon-floppy-save"> Save</span></button>
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
    componentDidMount () {
        let {user_avatar} = this.props;
        this.setState({ preview: user_avatar });
    }
    handleDrop (accepted, rejected) {
        if (accepted.length !== 0) {
            this.props.getImage(accepted[0]);
            this.setState({ preview: accepted[0].preview});
        } else {
            // console.log('day la rejected : ', rejected);
            alert('rejected');
            return false;
        }
    }
    render () {
        const { preview } = this.state;
        // console.log(preview);
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

const mapStateToProps = state => ({data: state.data, counter: state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestUserUpdate}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
