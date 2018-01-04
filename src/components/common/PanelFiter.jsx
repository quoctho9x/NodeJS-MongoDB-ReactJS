import React from 'react';

export default class PanelFiter extends React.Component {
    constructor () {
        super();
        this.state = {
            isHidden: false
        };
    }
    handleClick (e) {
        let self = e.target;
        let parent = self.closest('.group-collection');
        parent.querySelector('.filter-box').classList.toggle('hide');
        if (self.classList.contains('fa-minus')) {
            self.classList.remove('fa-minus');
            self.classList.add('fa-plus');
        } else {
            self.classList.add('fa-minus');
            self.classList.remove('fa-plus');
        }
    }
    render () {
        let {background} = this.props;
        if (background) {
            return (
                <div className="wrap-loading-component">
                    fillter
                </div>
            );
        } else {
            return (
                <div className="panel-filter">
                    <div className="group-collection">
                        <div className="title-block dropdown-filter">
                            <h3 className="title-group">Thương hiệu</h3>
                            <i onClick={this.handleClick.bind(this)} className="fa fa-minus flexbox-grid-default flexbox-justifyContent-center flexbox-alignItems-center"/>
                        </div>
                        <div className="filter-box" id="filter-vendor">
                            <ul>
                                <li>
                                    <label className="control control--checkbox">Biti's
                                        <input type="checkbox" defaultChecked={true}/>
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--checkbox">Adidas
                                        <input type="checkbox" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--checkbox">Banuli
                                        <input type="checkbox" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--checkbox">Vascara
                                        <input type="checkbox"/>
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--checkbox">Nike
                                        <input type="checkbox" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="group-collection">
                        <div className="title-block dropdown-filter">
                            <h3 className="title-group">Kích thước</h3>
                            <i onClick={this.handleClick.bind(this)} className="fa fa-minus flexbox-grid-default flexbox-justifyContent-center flexbox-alignItems-center"/>
                        </div>
                        <div className="filter-box" id="filter-vendor">
                            <ul className="ul-two-col clearfix">
                                <li>
                                    <label className="control control--checkbox">35
                                        <input type="checkbox" defaultChecked={true}/>
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--checkbox">36
                                        <input type="checkbox" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--checkbox">37
                                        <input type="checkbox" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--checkbox">38
                                        <input type="checkbox"/>
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--checkbox">39
                                        <input type="checkbox" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="group-collection">
                        <div className="title-block dropdown-filter">
                            <h3 className="title-group">Màu sắc</h3>
                            <i onClick={this.handleClick.bind(this)} className="fa fa-minus flexbox-grid-default flexbox-justifyContent-center flexbox-alignItems-center"/>
                        </div>
                        <div className="filter-box" id="filter-vendor">
                            <ul className="ul-two-col clearfix">
                                <li>
                                    <label className="control control--radio">Trắng
                                        <input type="radio" name="radio" defaultChecked={true}/>
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--radio">Vàng
                                        <input type="radio" name="radio" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--radio">Xanh
                                        <input type="radio" name="radio" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--radio">Đỏ
                                        <input type="radio" name="radio" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--radio">Tím
                                        <input type="radio" name="radio" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--radio">Cam
                                        <input type="radio" name="radio" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--radio">Lục
                                        <input type="radio" name="radio" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="group-collection">
                        <div className="title-block dropdown-filter">
                            <h3 className="title-group">Giá</h3>
                            <i onClick={this.handleClick.bind(this)} className="fa fa-minus flexbox-grid-default flexbox-justifyContent-center flexbox-alignItems-center"/>
                        </div>
                        <div className="filter-box" id="filter-vendor">
                            <ul className="">
                                <li>
                                    <label className="control control--radio">Nhỏ hơn 500.000₫
                                        <input type="radio" name="radio" defaultChecked={true}/>
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--radio">Từ 500.000₫ - 2.000.000₫
                                        <input type="radio" name="radio" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--radio">Từ 2.000.000₫ - 3.000.000₫
                                        <input type="radio" name="radio" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--radio">Từ 3.000.000₫ - 4.000.000₫
                                        <input type="radio" name="radio" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="control control--radio">Lớn hơn 4.000.000₫
                                        <input type="radio" name="radio" />
                                        <div className="control__indicator"/>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
