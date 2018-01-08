import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
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
                        <div className="row">
                            <div className="">
                                <a href="#" title={item.title}>
                                    <h3 className="article-title">{item.title}</h3>
                                </a>
                                <p className=""><i className="fa fa-calendar" /> {item.date} - {item.owner}</p>
                                <p className="">{item.content}</p>
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
                        <div className="group-collection mr-left-right">
                            <div className="title-block">
                                <h1 className="title-group">Tin tức</h1>
                            </div>
                        </div>
                        <DetailNews/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="group-collection mr-left-right">
                            <div className="title-block">
                                <h1 className="title-group">Bài viết mới nhất</h1>
                            </div>
                        </div>
                        <Newest/>
                    </div>
                </div>
            </main>
        );
    }
}

class ItemNews extends React.Component {
    render () {
        let {item} = this.props;
        return (
            <li className="wrapper-article mb15">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 blog-item-image">
                        <a href="#">
                            <img src={item.link} alt="title ne"/>
                        </a>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 blog-item-title">
                        <a href="#" title={item.title}>
                            <h3 className="article-title">{item.title}</h3>
                        </a>
                        <p className="blog-item-created"><i className="fa fa-calendar" /> {item.date} - {item.owner}</p>
                        <div className="blog-item-content">{item.summary}</div>
                    </div>
                </div>
            </li>
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
                        <a href="#">
                            <img src={item.link} alt="title ne"/>
                        </a>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 blog-item-title">
                        <a href="#" title={item.title}>
                            <h3 className="article-title">{item.title}</h3>
                        </a>
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
