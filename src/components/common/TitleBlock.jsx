import React from 'react';
export default class TitleBlocks extends React.Component {
    render () {
        return (
            <div className="group-collection mr-left-right">
                <div className="title-block">
                    <h1 className="title-group">{this.props.name}</h1>
                    <div className="browse-tags pull-right hidden-xs">
                        <span className="mr5">Sắp xếp theo: </span>
                        <span className="custom-dropdown custom-dropdown--white">
                            <select className="sort-by custom-dropdown__select custom-dropdown__select--white">
                                <option value="manual">Sản phẩm nổi bật</option>
                                <option value="price-asc">Giá: Tăng dần</option>
                                <option value="price-desc">Giá: Giảm dần</option>
                                <option value="alpha-asc">Tên: A-Z</option>
                                <option value="alpha-desc">Tên: Z-A</option>
                                <option value="created-asc">Cũ nhất</option>
                                <option value="created-desc">Mới nhất</option>
                                <option value="best-selling">Bán chạy nhất</option>
                            </select>
                        </span>
                    </div>

                </div>
            </div>
        );
    }
}
