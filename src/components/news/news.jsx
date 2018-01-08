import React from 'react';
import {bindActionCreators} from 'redux';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {requestGetAllNews} from '../../redux/actions/action_news';

class News extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            total       : 0,
            currentCount: 9,
            offset      : 3,
            list        : [],
            isFetching  : false
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
            this.loadInitialContent(news.all.news, this.state.currentCount);
            this.setState({total: news.all.total});
            window.addEventListener('scroll', this.loadOnScroll);
        }
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this.loadOnScroll);
    }

    render () {
        let {news} = this.props;
        console.log('lay duoc list news roi ne ', news);
        const News_list = () => {
            return (
                <ul id="list-articles" className="blog-list-articles clearfix">
                    {
                        this.state.list.map((item, index) => (
                            <ItemNews key ={index} item={item}/>
                        ))
                    }
                    {
                        (this.state.currentCount !== this.state.total)
                            ?  <div id="content-end" onClick={e => this.forceLoadOnScroll()}>
                                <i className="fa fa-spinner fa-spin fa-4x animated" />
                            </div>  : null
                    }
                </ul>
            );
        };
        const Newest= () => {
            return (
                <ul id="list-articles" className="blog-list-articles clearfix">
                    {
                        this.state.list.map((item, index) => {
                            if (index >= 5) return false;
                            else {
                                return(
                                    <New_News key={index} item={item}/>
                                )
                            }
                        })
                    }
                </ul>
            );
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
                        <News_list/>
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
    forceLoadOnScroll () {
    }

    loadOnScroll = (e) =>{
        let {news} = this.props;
        if (this.state.currentCount === this.state.total) return;
        let el = document.getElementById('content-end');
        let rect = el.getBoundingClientRect();
        let isAtEnd = (rect.y <= (window.innerHeight || document.documentElement.clientHeight));
        if (isAtEnd) {
            // User at the end of content. load more content
            if (!this.state.isFetching) {
                this.setState({isFetching: true});

                // get content from server
                setTimeout(() => {
                    let count = this.state.currentCount + this.state.offset;
                    if(count >= this.state.total){
                        count = this.state.total;
                    }
                    if (this.state.currentCount !== this.state.total) {
                        this.setState({
                            isFetching  : false,
                            currentCount: count,
                            list        : [...this.state.list, ...news.all.news.slice(this.state.currentCount, count)]
                        });
                    }
                }, 1000);
            }
        }
    };

    loadInitialContent (array,currentinit) {
        // Get content from server using your preferred method (like AJAX, relay)
        let ary = array.slice(0, currentinit);
        this.setState({list: ary});
    }
}

class ItemNews extends React.Component {
    render(){
        var {item} = this.props;
        return(
            <li className="wrapper-article mb15">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 blog-item-image">
                        <Link to={`news/${item.index}`} className="" title={item.name}>
                            <img src={item.link} alt="title ne"/>
                        </Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 blog-item-title">
                        <Link to={`news/${item.index}`} className="" title={item.name}>
                            <h3 className="article-title">{item.title}</h3>
                        </Link>
                        <p className="blog-item-created"><i className="fa fa-calendar" /> {item.date} - {item.owner}</p>
                        <div className="blog-item-content">{item.summary}</div>
                    </div>
                </div>
            </li>
        )
    }
}
class New_News extends React.Component {
    render(){
        var {item} = this.props;
        return(
            <li className="wrapper-article mb15">
                <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 blog-item-image">
                            <Link to={`news/${item.index}`} className="" title={item.name}>
                                <img src={item.link} alt="title ne"/>
                            </Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 blog-item-title">
                        <Link to={`news/${item.index}`} className="" title={item.name}>
                            <h3 className="article-title">{item.title}</h3>
                        </Link>
                        <p className="blog-item-created"><i className="fa fa-calendar" /> {item.date} - {item.owner}</p>
                    </div>
                </div>
            </li>
        )
    }
}

const mapStateToProps = state => ({news:state.news});
const mapDispatchToProps = dispatch => bindActionCreators({requestGetAllNews}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(News);
