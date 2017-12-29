import React from 'react';

export default class PanelFiter extends React.Component {
    constructor () {
        super();
        this.state = {
            isHidden: false
        };
    }
    handleClick (e) {
        var parent = e.target.closest('.group-collection');
        parent.querySelector('.filter-box').classList.toggle('hide');
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
                    <div className="group-collection" aria-expanded="true">
                        <div className="title-block dropdown-filter">
                            <h3 className="title-group">Thương hiệu</h3>
                            <i onClick={this.handleClick.bind(this)} className="fa fa-minus flexbox-grid-default flexbox-justifyContent-center flexbox-alignItems-center"
                                aria-hidden="true"/>
                        </div>
                        <div className="filter-box" id="filter-vendor">
                            <ul>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>Nike</span>
                                    </label>
                                </li>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>Biti's</span>
                                    </label>
                                </li>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>Adidas</span>
                                    </label>
                                </li>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>Banuli</span>
                                    </label>
                                </li>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>Vascara</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="group-collection" aria-expanded="true">
                        <div className="title-block dropdown-filter">
                            <h3 className="title-group">Kích thước</h3>
                            <i onClick={this.handleClick.bind(this)} className="fa fa-minus flexbox-grid-default flexbox-justifyContent-center flexbox-alignItems-center"
                                aria-hidden="true"/>
                        </div>
                        <div className="filter-box" id="filter-vendor">
                            <ul>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>35</span>
                                    </label>
                                </li>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>36</span>
                                    </label>
                                </li>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>37</span>
                                    </label>
                                </li>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>38</span>
                                    </label>
                                </li>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>39</span>
                                    </label>
                                </li>
                                <li>
                                    <label data-filter="nike" className="nike">
                                        <input type="checkbox" value="(Nike)"/>
                                        <span>40</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="group-collection" aria-expanded="true">
                        <div className="title-block dropdown-filter">
                            <h3 className="title-group">Màu sắc</h3>
                            <i onClick={this.handleClick.bind(this)} className="fa fa-minus flexbox-grid-default flexbox-justifyContent-center flexbox-alignItems-center"
                                aria-hidden="true"/>
                        </div>
                        <div className="filter-box" id="filter-vendor">
                            <ul>
                                <li>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio"/>Option 1
                                    </label>
                                </li>
                                <li>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio"/>Option 2
                                    </label>
                                </li>
                                <li>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio"/>Option 3
                                    </label>
                                </li>
                                <li>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio"/>Option 4
                                    </label>
                                </li>
                                <li>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio"/>Option 5
                                    </label>
                                </li>
                                <li>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio"/>Option 6
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
