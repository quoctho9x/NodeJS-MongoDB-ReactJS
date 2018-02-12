import React from 'react';
export default class Step2 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            thanhtoan: {}
        };
    }
    componentWillMount () {
        let {getStore} = this.props;
        this.setState({thanhtoan: getStore().thanhtoan});
        // console.log('componentWillMount', getStore());
    }
    handleChange ({ target }) {
        // get element target to set value
        let user_new = Object.assign({}, this.state.thanhtoan);
        let target_name = target.name;
        user_new[target_name] = target.value;
        this.setState({thanhtoan: user_new});
    }

    render () {
        let {thanhtoan} = this.state;
        let {getStore, updateStore} = this.props;
        updateStore({thanhtoan: thanhtoan});
        // console.log('show gia tri', thanhtoan);
        //console.log('step 2', getStore());
        return (
            <div className="step-2 ">
                <div className="row ">
                    <div className="col-md-6 center-immortal">
                        <div className="well-block">
                            <div className="well-title center">
                                <h2>Thông tin khác</h2>
                            </div>
                            <form>
                                {/* <!-- Form start --> */}
                                <div className="row">
                                    <div className="group-collection">
                                        <div className="title-block dropdown-filter">
                                            <h3 className="title-group">Vận chuyển</h3>
                                        </div>
                                        <div className="filter-box" id="filter-vendor">
                                            <ul className="">
                                                <li>
                                                    <label className="control control--radio">Miễn phí (3-4ngày)
                                                        <input type="radio" name="transport" value="Miễn phí (3-4ngày)" defaultChecked={(thanhtoan.transport === 'Miễn phí (3-4ngày)')} onClick={this.handleChange.bind(this)}/>
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio">Giao hàng Thông thường (2-3ngày) 25.000đ.
                                                        <input type="radio" name="transport" value="Giao hàng Thông thường (2-3ngày) 25.000đ." defaultChecked={(thanhtoan.transport === 'Giao hàng Thông thường (2-3ngày) 25.000đ.')} onClick={this.handleChange.bind(this)}/>
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio">Giao hàng nhanh (1-2ngày) 40.000đ.
                                                        <input type="radio" name="transport" value="Giao hàng nhanh (1-2ngày) 40.000đ." defaultChecked={(thanhtoan.transport === 'Giao hàng nhanh (1-2ngày) 40.000đ.')} onClick={this.handleChange.bind(this)}/>
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="group-collection">
                                        <div className="title-block dropdown-filter">
                                            <h3 className="title-group">Thanh toán</h3>
                                        </div>
                                        <div className="filter-box" id="filter-vendor">
                                            <ul className="">
                                                <li>
                                                    <label className="control control--radio">Thanh toán khi nhận hàng
                                                        <input type="radio" name="pay" defaultChecked={(thanhtoan.pay === 'Thanh toán khi nhận hàng')} value="Thanh toán khi nhận hàng" onClick={this.handleChange.bind(this)}/>
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio">Thanh toán bằng thẻ ghi nợ
                                                        <input type="radio" name="pay" value="Thanh toán bằng thẻ ghi nợ" defaultChecked={(thanhtoan.pay === 'Thanh toán bằng thẻ ghi nợ')} onClick={this.handleChange.bind(this)}/>
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio"> Thanh toán bằng ví điện tử
                                                        <input type="radio" name="pay" value="Thanh toán bằng ví điện tử" defaultChecked={(thanhtoan.pay === 'Thanh toán bằng ví điện tử')} onClick={this.handleChange.bind(this)}/>
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio">Chuyển khoản ngân hàng
                                                        <input type="radio" name="pay" value="Chuyển khoản ngân hàng" defaultChecked={(thanhtoan.pay === 'Chuyển khoản ngân hàng')} onClick={this.handleChange.bind(this)}/>
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                            </ul>
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
