import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestGetProducts} from '../../redux/actions/action_products';
import {Loading} from '../common/index';
const styles = {
    box: {
        width   : '350px',
        border  : 'solid thin gray',
        left    : '37%',
        padding : '10px',
        position: 'relative',
        margin  : '15px'
    },
    loading: {
        backgroundColor: 'aquamarine',
        padding        : '10px',
        width          : '350px',
        left           : '34%',
        position       : 'relative',
        margin         : '52px'
    }
};
var y_loading = 'dkm';
var y_window = 'dkm';
var status = 'dkm';
class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            total:0,
            currentCount:3,
            offset:3,
            list:[],
            isFetching:false
        }
    }
    componentWillMount(){
        //goi api lay list san pham
        this.props.requestGetProducts();
    }
    componentDidMount(){
        /*console.log('props', this.props);
            window.addEventListener('scroll', this.loadOnScroll);*/
    }
    componentWillReceiveProps (newProps) {
        let {products} = newProps;
        if(!products.loading || Object.constructor === products){
           this.loadInitialContent(products.products);
           this.setState({total:products.total});
           window.addEventListener('scroll', this.loadOnScroll);
        }

    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.loadOnScroll);
    }

    render() {
        let {products} = this.props;
        const Products_list = () => {
            return(
                <div className="App-intro">
                    <div className="test">
                        <div className="y-loading" contentEditable='true' dangerouslySetInnerHTML={{ __html: y_loading }}/>
                        <div className="y-window"  dangerouslySetInnerHTML={{ __html: y_window }}/>
                        <div className="status"  dangerouslySetInnerHTML={{ __html: status }}/>
                    </div>
                    {
                        this.state.list.map((item,index) => (
                            <div style = {styles.box} key ={index}>
                                <img src={item.pic} width = "350"/>
                                <h3 style = {{margin:0}}>{item.title}</h3>
                                <p style = {{color:'gray', textAlign:"center"}}>{item.summary}</p>
                            </div>
                        ))
                    }
                    {
                        (this.state.currentCount !== this.state.total)?
                            <div id="content-end" style = {styles.loading} onClick={e => this.forceLoadOnScroll()}>
                                Please wait. Loading...
                            </div>: null
                    }
                </div>
            )
        }
        return (
            <main className="main-contain App">
                <Products_list/>
              {/*  {(products.loading) ? <Loading background={true}/> : <Products_list/> }*/}
            </main>
        );
    }
    forceLoadOnScroll(){

    }

    loadOnScroll = (e) =>{
        if(this.state.currentCount === this.state.total) return;
        var el = document.getElementById('content-end');
        var rect = el.getBoundingClientRect();
        y_loading = rect.y;
        y_window = window.innerHeight;
        console.log('rect',y_loading)
        console.log('y_window',y_window)


        var isAtEnd = (
            // rect.top >= 0 &&
            // rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        ); status = isAtEnd; console.log('isAtEnd',isAtEnd)
        y_window = window.innerHeight;
        if( isAtEnd){
            //User at the end of content. load more content
            if(!this.state.isFetching){

                this.setState({isFetching:true});

                //get content from server
                setTimeout(() => {
                    var count = this.state.currentCount + this.state.offset
                    if(this.state.currentCount !== this.state.total){
                        this.setState({
                            isFetching:false,
                            currentCount:count,
                            list:[...this.state.list,...this.props.products.products.slice(this.state.currentCount, count)]
                        });
                    }
                }, 3000);
            }
        }
    }

    loadInitialContent(array){
        //Get content from server using your preferred method (like AJAX, relay)
        console.log('list ban dau', array);
        let ary = array.slice(0,this.state.offset);
        this.setState({list:ary});
    }
}

const mapStateToProps = state => ({products: state.products});
const mapDispatchToProps = dispatch => bindActionCreators({requestGetProducts}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(News);
