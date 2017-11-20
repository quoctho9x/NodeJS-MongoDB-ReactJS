import React from 'react';
export default class Footer extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <footer className="myfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h4 className="title-widget">Sumi</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
                            <ul className="social social-circle">
                                <li> <a href="#" className="icoFacebook"><i className="fa fa-facebook"/></a></li>
                                <li> <a href="#" className="icoTwitter"> <i className="fa fa-twitter"/> </a> </li>
                                <li> <a href="#" className="icoGoogle"> <i className="fa fa-google-plus"/> </a> </li>
                                <li> <a href="#" className="icoRss"> <i className="fa fa-youtube"/> </a> </li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h4 className="title-widget">My Account</h4>
                            <span className="acount-icon">
                                <a href="#"><i className="fa fa-heart" aria-hidden="true"/> Wish List</a>
                                <a href="#"><i className="fa fa-cart-plus" aria-hidden="true"/> Cart</a>
                                <a href="#"><i className="fa fa-user" aria-hidden="true"/> Profile</a>
                                <a href="#"><i className="fa fa-globe" aria-hidden="true"/> Language</a>
                            </span>
                        </div>
                        <div className="col-sm-3">
                            <h4 className="title-widget">Category</h4>
                            <div className="category">
                                <a href="#" className="zoom">men</a>
                                <a href="#" className="zoom">women</a>
                                <a href="#" className="zoom">boy</a>
                                <a href="#" className="zoom">girl</a>
                                <a href="#" className="zoom">bag</a>
                                <a href="#" className="zoom">teshart</a>
                                <a href="#" className="zoom">top</a>
                                <a href="#" className="zoom">shos</a>
                                <a href="#" className="zoom">glass</a>
                                <a href="#" className="zoom">kit</a>
                                <a href="#" className="zoom">baby dress</a>
                                <a href="#" className="zoom">kurti</a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <h4 className="title">Payment Methods</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul className="payment">
                                <li><a href="#"><i className="fa fa-cc-amex zoom" aria-hidden="true"/></a></li>
                                <li><a href="#"><i className="fa fa-credit-card zoom" aria-hidden="true"/></a></li>
                                <li><a href="#"><i className="fa fa-paypal zoom" aria-hidden="true"/></a></li>
                                <li><a href="#"><i className="fa fa-cc-visa zoom" aria-hidden="true"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>

                    <div className="row text-center"> © 2017. Gopiballavpur.com</div>
                </div>
            </footer>
        );
    }
}
