import React from 'react';

export default class Step1 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    componentWillMount () {
        let {getStore} = this.props;
        this.setState({user: getStore().user});
    }
    componentWillReceiveProps (nextProps) {
        let {getStore} = this.props;
        this.setState({user: getStore().user});
        // console.log('componentWillMount', getStore());
    }
    handleChange ({ target }) {
        let {getStore, updateStore} = this.props;
        // get element target to set value
        let user_new = Object.assign({}, this.state.user);
        let target_id = target.id;
        user_new[target_id] = target.value;
        this.setState({user: user_new});
    }

    render () {
        let {user} = this.state;
        let {getStore, updateStore} = this.props;
        updateStore({user: user});
        // console.log('getStore cap nhat step1', getStore());
        // console.log('state 1', user);
        return (
            <div className="step-1">
                <div className="row">
                    <div className="col-md-6 center-immortal">
                        <div className="well-block">
                            <div className="well-title center">
                                <h2>Thông tin mua hàng</h2>
                            </div>
                            <form>
                                {/* <!-- Form start --> */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="name">Tên</label>
                                            <input id="name" name="name" type="text" placeholder="Tên" className="form-control input-md" value={user.name || ''} onChange={this.handleChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="email">Email</label>
                                            <input id="email" name="email" type="text" placeholder="E-Mail" className="form-control input-md" value={user.email || ''} onChange={this.handleChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="email">Số Điện Thoại</label>
                                            <input id="phone" name="phone" type="text" placeholder="Phone-number" className="form-control input-md" value={user.phone || ''} onChange={this.handleChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="email">Ngày Sinh</label>
                                            <input id="birthday" name="birthday" type="text" placeholder="Ngày sinh" className="form-control input-md" value={user.birthday || ''} onChange={this.handleChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="email">Địa chỉ giao hàng</label>
                                            <input id="address" name="address" type="text" placeholder="Address" className="form-control input-md" value={user.address || ''} onChange={this.handleChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="date">Ngày thích hợp</label>
                                            <input id="date" name="date" type="date" placeholder="Preferred Date" className="form-control input-md" value={user.dateIsGood || ''} onChange={this.handleChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="time">Thời gian thích hợp</label>
                                            <select id="time" name="time" className="form-control" value={user.time || ''} onChange={this.handleChange.bind(this)}>
                                                <option value="8:00 to 9:00">8:00 to 9:00</option>
                                                <option value="9:00 to 10:00">9:00 to 10:00</option>
                                                <option value="10:00 to 1:00">10:00 to 1:00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="appointmentfor">Phương thức thanh toán</label>
                                            <select id="appointmentfor" name="appointmentfor" className="form-control">
                                                <option value="Service#1">Service#1</option>
                                                <option value="Service#2">Service#2</option>
                                                <option value="Service#3">Service#3</option>
                                                <option value="Service#4">Service#4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="email">Ghi chú</label>
                                            <textarea id="note" name="note" className="field__input form-control" placeholder="Ghi chú" value={user.note || ''} onChange={this.handleChange.bind(this)}/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- form end --> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
