import React from 'react';
import App from '../containers/App';

export default function About () {
    return (
        <main className="main-contain">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 pd5">
                        <h1>
                            Giới thiệu
                        </h1>
                        <div className="clearfix page-description">
                            <p>Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.</p>
                            <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>
                            <ul>
                                <li>Bạn là ai</li>
                                <li>Giá trị kinh doanh của bạn là gì</li>
                                <li>Địa chỉ cửa hàng</li>
                                <li>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                                <li>Bạn kinh doanh ngành hàng online được bao lâu</li>
                                <li>Đội ngũ của bạn gồm những ai</li>
                                <li>Thông tin liên hệ</li>
                                <li>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li></ul>
                            <p>Bạn có thể chỉnh sửa hoặc xoá bài viết này tại đây hoặc thêm những bài viết mới trong phần quản lý Trang nội dung.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
