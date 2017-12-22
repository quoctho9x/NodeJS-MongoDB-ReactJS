import React from 'react';

export default class Loading extends React.Component {
    render () {
        let {background} = this.props;
       /* console.log(background);*/
        if (background) {
            return (
                <div className="wrap-loading-component">
                    <div className="loading-component">
                        <div className="wrap-loading">
                            <div className="loader"/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="loading-component">
                    <div className="wrap-loading">
                        <div className="loader"/>
                    </div>
                </div>
            );
        }
    }
}
