import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestApiData,requestCounter} from '../../redux/actions/actions';
import { Button } from 'react-bootstrap';
class Home extends React.Component {
    componentDidMount () {
        this.props.requestApiData();
    }
    handleCounter(){
        this.props.requestCounter(10);
    }
    person = (x, i) =>
        <div key={x.id.value}>
            <h1>{JSON.stringify(x.name)}</h1>
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
        const { results = [] } = this.props.data;
        return(
            <main className="center">
                {results.length ? <h1>{results.map(this.person)}</h1> : <h1>loading...</h1>}
                <Button onClick={this.handleCounter.bind(this)}>Default button</Button>
                <h1>{this.props.counter}</h1>
            </main>
        ) ;
    }
}
const mapStateToProps = state => ({data: state.data,counter:state.counter});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData,requestCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
