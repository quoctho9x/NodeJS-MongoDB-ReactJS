import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import {requestGetAllNews} from '../../redux/actions/action_news';

class NewsDetail extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentWillMount () {
        // goi api lay list tin tuc
        this.props.requestGetAllNews();
    }
    componentDidMount () {
    }
    componentWillReceiveProps (newProps) {
        let {news} = newProps;
        if (!news.loading || Object.constructor === news) {
            this.setState({list: news.all.news});
        }
    }

    render () {
        let {news, match} = this.props;
        let item_index = match.params.index;
        const DetailNews = () => {
            if (news.loading || Object.constructor === news) {
                return (
                    <div id="content-end">
                        <i className="fa fa-spinner fa-spin fa-4x animated" />
                    </div>
                );
            } else {
                const index = news.all.news.findIndex(x => x.index === parseInt(item_index));
                let item = news.all.news[index];
                if (item === undefined || item === null) {
                    return (
                        <main className="main-contain">
                            <h3>khong tim thay bai dang : {match.params.index}</h3>
                        </main>
                    );
                } else {
                    return (
                        <div className="row detail-article">
                            <div className="">
                                <h3 className="detail-article-title">{item.title}</h3>
                                <p className="detail-article-date"><i className="fa fa-calendar" /> {item.date} - {item.owner}</p>
                                {/* <div className="detail-article-content clearfix">
                                    <p>Từ khi ra mắt với phần upper chỉ trên nền đen và trắng, adidas AlphaBounce giờ đây đã sẵn sàng kết hợp với những họa tiết sặc sỡ và chuyển đổi màu sắc XENO độc đáo.</p>
                                    <p class="image"><img src="//bizweb.dktcdn.net/thumb/grande/100/238/538/files/adidas-alphabounce-reflective-pack-2-grande.jpg?v=1507468518617"/></p>
                                    <p class="image"><img src="//bizweb.dktcdn.net/thumb/grande/100/238/538/files/adidas-alphabounce-reflective-pack-3-grande.jpg?v=1507468532499"/></p>
                                    <p>AlphaBounce trở nên sáng sủa hơn bao giờ hết trong một gói Reflective hoàn toàn mới. Đưa ra những phiên bản bắt mắt cho cả nam và nữ có tính năng phản chiếu ở phần upper, viền cổ và trên lưỡi gàAlphaBounce sẽ sang lên như chưa bao giờ.</p>
                                    <p class="image"><img src="//bizweb.dktcdn.net/thumb/grande/100/238/538/files/adidas-alphabounce-reflective-pack-4-grande.jpg?v=1507468541428"/></p>
                                    <p class="image"><img src="//bizweb.dktcdn.net/thumb/grande/100/238/538/files/adidas-alphabounce-reflective-pack-5-grande.jpg?v=1507468549798"/></p>
                                    <p>Ra mắt ba màu black, silver và tan cho nam và hai màu black và tan cho nữ</p>
                                    <p class="image"><img src="//bizweb.dktcdn.net/thumb/grande/100/238/538/files/adidas-alphabounce-reflective-pack-6-grande.jpg?v=1507468558202"/></p>
                                    <p class="image"><img src="//bizweb.dktcdn.net/thumb/grande/100/238/538/files/adidas-alphabounce-reflective-pack-7-grande.jpg?v=1507468566150"/></p>
                                </div> */}
                                <div className="detail-article-content clearfix" dangerouslySetInnerHTML={{__html: item.content}} />
                            </div>
                        </div>
                    );
                }
            }
        };

        const Newest = () => {
            if (news.loading || Object.constructor === news) {
                return (
                    <div id="content-end">
                        <i className="fa fa-spinner fa-spin fa-4x animated" />
                    </div>
                );
            } else {
                return (
                    <ul id="list-articles" className="blog-list-articles clearfix">
                        {
                            this.state.list.map((item, index) => {
                                if (index >= 5) return false;
                                else {
                                    return (
                                        <New_News key={index} item={item}/>
                                    );
                                }
                            })
                        }
                    </ul>
                );
            }
        };
        return (
            <main className="main-contain App">
                <div className="container">
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <DetailNews/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="group-collection mr-left-right">
                            <div className="title-block">
                                <h1 className="title-group">Bài viết mới nhất</h1>
                            </div>
                        </div>
                        <Newest />
                    </div>
                </div>
            </main>
        );
    }
}

class New_News extends React.Component {
    render () {
        let {item} = this.props;
        return (
            <li className="wrapper-article mb15">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 blog-item-image">
                        <Link to={`/news/${item.index}`} className="" title={item.name}>
                            <img src={item.link} alt="title ne"/>
                        </Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 blog-item-title">
                        <Link to={`/news/${item.index}`} className="" title={item.name}>
                            <h3 className="article-title">{item.title}</h3>
                        </Link>
                        <p className="blog-item-created"><i className="fa fa-calendar" /> {item.date} - {item.owner}</p>
                    </div>
                </div>
            </li>
        );
    }
}

const mapStateToProps = state => ({news: state.news});
const mapDispatchToProps = dispatch => bindActionCreators({requestGetAllNews}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
