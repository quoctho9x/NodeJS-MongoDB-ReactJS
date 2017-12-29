import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestGetProducts, requestGetAllProducts} from '../../redux/actions/action_products';
import {Loading} from '../common/index';
const styles = {
    box: {
        width   : '200px',
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
        // goi api lay list san pham
       this.props.requestGetAllProducts();
    }
    componentDidMount () {
    }
    componentWillReceiveProps (newProps) {
        let {products} = newProps;
        if (!products.loading || Object.constructor === products) {
            this.loadInitialContent(products.all.products, this.state.currentCount);
            this.setState({total: products.all.total});
            window.addEventListener('scroll', this.loadOnScroll);
        }
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this.loadOnScroll);
    }

    render () {
        let {products} = this.props;
        const Products_list = () => {
            return (
                <div className="App-intro">
                    {
                        this.state.list.map((item, index) => (
                            <div style = {styles.box} key ={index}>
                                <img src={item.link} width = "150"/>
                                <h3 style = {{margin: 0}}>{item.name}</h3>
                                <p style = {{color: 'gray', textAlign: 'center'}}>{item.color}</p>
                            </div>
                        ))
                    }
                    {
                        (this.state.currentCount !== this.state.total)
                            ? <div id="content-end" style = {styles.loading} onClick={e => this.forceLoadOnScroll()}>
                                Please wait. Loading...
                            </div> : null
                    }
                </div>
            );
        };
        return (
            <main className="main-contain App">
                <Products_list/>
                {/*  {(products.loading) ? <Loading background={true}/> : <Products_list/> } */}
            </main>
        );
    }
    forceLoadOnScroll () {

    }

    loadOnScroll = (e) =>{
        let {products} = this.props;
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
                    /*console.log('current', count)
                    console.log('this.state.total', this.state.total)
                    console.log('list', this.state.list)
                    console.log('this.props.products', this.props.products.products.slice(this.state.currentCount, count))*/

                    if (this.state.currentCount !== this.state.total) {
                        this.setState({
                            isFetching  : false,
                            currentCount: count,
                            list        : [...this.state.list, ...products.all.products.slice(this.state.currentCount, count)]
                        });
                    }
                }, 1000);
            }
        }
    }

    loadInitialContent (array,currentinit) {
        // Get content from server using your preferred method (like AJAX, relay)
        console.log('list ban dau', array);
        let ary = array.slice(0, currentinit);
        this.setState({list: ary});
    }
}

const mapStateToProps = state => ({products: state.products});
const mapDispatchToProps = dispatch => bindActionCreators({requestGetProducts, requestGetAllProducts}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(News);
