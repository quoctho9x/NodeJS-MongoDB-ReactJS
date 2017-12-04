import React from 'react';
import debounce from 'lodash/debounce';
export default class ScrollButton extends React.Component {
    constructor () {
        super();
        this.state = {
            intervalId  : 0,
            activeButton: false
        };
    }
    componentDidMount () {
        window.addEventListener('scroll', debounce(this.handleScroll.bind(this), 100));
    }

    /* componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    } */

    handleScroll (event) {
        let B = document.body; // IE 'quirks'
        let D = document.documentElement; // IE with doctype
        D = (D.clientHeight) ? D : B;
        if (D.scrollTop >= 300) {
            this.setState({
                activeButton: true
            });
        } else {
            this.setState({
                activeButton: false
            });
        }
    }
    scrollStep () {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    scrollToTop () {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render () {
        return <button title="Back to top" className={`scroll ${this.state.activeButton ? 'scroll-active' : ''}`}
            onClick={ () => { this.scrollToTop(); }}>
            <span className="arrow-up glyphicon glyphicon-chevron-up"></span>
        </button>;
    }
}
