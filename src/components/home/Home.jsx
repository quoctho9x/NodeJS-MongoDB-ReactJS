import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestCounter} from '../../redux/actions/actions';
import { Button } from 'react-bootstrap';
import SliderMain from '../sliders/slider_main';
import SliderVertical from '../sliders/slider_vertical';
import Products from '../products/products';
import SliderNews from '../news/slider_news';
import SliderTrademark from '../sliders/slider_trademark';
import { TitleBlock,BtnViewMore } from '../common';
class Home extends React.Component {
    componentDidMount () {
    }
    handleCounter(){
        this.props.requestCounter(10);
    }
    person = (x, i) =>
        <div key={x.id.value}>
            {/*<h1>{JSON.stringify(x.name)}</h1>*/}
            <h1>
                {x.gender}
            </h1>
            <h1>
                {x.name.first}
            </h1>
            <h1>
                {x.name.last}
            </h1>
            <img src={x.picture.medium}/>
        </div>;

    render () {
        var {match} = this.props;
        const { results = [] } = this.props.data.data;
        return(
            <main className="main-contain" >
                <section className="slider-main container center">
                    <SliderMain/>
                </section>
                <div id="group-sale-index" className="container">
                    <TitleBlock title="Black Friday" subtitle="Chương trình sẽ kết thúc sau"/>
                    <Products match={match} productType="women" maxItem={8}/>
                    <BtnViewMore link="/allshoes" title="Xem tất cả"/>

                </div>
                <div id="group-sale-index-new" className="container">
                    <TitleBlock title="SẢN PHẨM MỚI" subtitle="Hàng luôn được cập nhật thường xuyên"/>
                    <Products match={match} productType="men" maxItem={8}/>
                    <BtnViewMore link="/allshoes" title="Xem tất cả"/>

                </div>
                <div id="group-sale-index-hot" className="container">
                    <TitleBlock title="SẢN PHẨM HOT" subtitle="Hàng luôn được cập nhật thường xuyên"/>
                    <Products match={match} productType="discount" maxItem={8}/>
                    <BtnViewMore link="/allshoes" title="Xem tất cả"/>

                </div>
                <div id="group-sale-index-bestsale" className="container">
                    <TitleBlock title="SẢN PHẨM BÁN CHẠY" subtitle="Hàng luôn được cập nhật thường xuyên"/>
                    <Products match={match} productType="new" maxItem={8}/>
                    <BtnViewMore link="/allshoes" title="Xem tất cả"/>

                </div>
                <div id="group-sale-index-bestsale" className="container">
                    <TitleBlock title="TIN TỨC" subtitle="Hàng luôn được cập nhật thường xuyên"/>
                    <SliderNews/>
                    <BtnViewMore link="/news" title="Xem Thêm"/>

                </div>
                <div id="group-sale-index-trademark" className="container">
                    <TitleBlock title="THƯƠNG HIỆU" subtitle="Thương hiệu nổi bật của chúng tôi"/>
                    <SliderTrademark/>

                </div>
                {/*<div className="center container">
                    {results.length ? <h1>{results.map(this.person)}</h1> : <h1>loading...</h1>}
                    <Button onClick={this.handleCounter.bind(this)}>Default button</Button>
                    <h1>{this.props.counter}</h1>
                </div>*/}
            </main>
        ) ;
    }
}
const mapStateToProps = state => ({data: state.data,counter:state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
