import React from 'react';
export default class Step2 extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
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
                                                        <input type="radio" name="radio-transport" defaultChecked={true}/>
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio">Giao hàng Thông thường (2-3ngày) 25.000đ.
                                                        <input type="radio" name="radio-transport" />
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio">Giao hàng nhanh (1-2ngày) 40.000đ.
                                                        <input type="radio" name="radio-transport" />
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
                                                        <input type="radio" name="radio-pay" defaultChecked={true}/>
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio">Thanh toán bằng thẻ ghi nợ
                                                        <input type="radio" name="radio-pay" />
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio"> Thanh toán bằng ví điện tử
                                                        <input type="radio" name="radio-pay" />
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio">Chuyển khoản ngân hàng
                                                        <input type="radio" name="radio-pay" />
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*<div className="group-collection">
                                        <div className="title-block dropdown-filter">
                                            <h3 className="title-group">Mã giảm giá</h3>
                                        </div>
                                        <div className="filter-box" id="filter-vendor">
                                            <ul className="">
                                                <li>
                                                    <label className="control control--radio">Không
                                                        <input type="radio" name="radio-discount" defaultChecked={true}/>
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="control control--radio">Có
                                                        <input type="radio" name="radio-discount" />
                                                        <div className="control__indicator"/>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>*/}
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
