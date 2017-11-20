import React from 'react';
let initialCenter = { lng: 106.591619, lat: 10.711165 };
export default class Contacts extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <main>
                <div className="container animated fadeIn">

                    <div className="row">
                        <h1 className="header-title"> Contact </h1>
                        <hr/>
                        <div className="col-sm-12" id="parent">
                            <div className="col-sm-6">
                                <iframe width="100%" height="320px;" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=10.713209,106.592257&key=AIzaSyAf64FepFyUGZd3WFWhZzisswVx2K37RFY" allowFullScreen/>
                            </div>

                            <div className="col-sm-6">
                                <form action="form.php" className="contact-form" method="post">

                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" name="nm" placeholder="Name" required="" autoFocus=""/>
                                    </div>

                                    <div className="form-group form_left">
                                        <input type="email" className="form-control" id="email" name="em" placeholder="Email" required=""/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" id="phone" maxLength="10" placeholder="Mobile No." required=""/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control textarea-contact" rows="5" id="comment" name="FB" placeholder="Type Your Message/Feedback here..." required=""/>
                                        <br/>
                                        <button className="btn btn-default btn-send"> <span className="glyphicon glyphicon-send"/> Send </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="container second-portion">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <div className="image"><i className="fa fa-envelope" aria-hidden="true"/></div>
                                        <div className="info">
                                            <h3 className="title">MAIL & WEBSITE</h3>
                                            <p>
                                                <i className="fa fa-envelope" aria-hidden="true"/> &nbsp gondhiyahardik6610@gmail.com
                                                <br/>
                                                <br/>
                                                <i className="fa fa-globe" aria-hidden="true"/> &nbsp www.hardikgondhiya.com
                                            </p>

                                        </div>
                                    </div>
                                    <div className="space"/>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <div className="image"><i className="fa fa-mobile" aria-hidden="true"/></div>
                                        <div className="info">
                                            <h3 className="title">CONTACT</h3>
                                            <p>
                                                <i className="fa fa-mobile" aria-hidden="true"/> &nbsp (+91)-9624XXXXX
                                                <br/>
                                                <br/>
                                                <i className="fa fa-mobile" aria-hidden="true"/> &nbsp  (+91)-7567065254
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space"/>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <div className="image"><i className="fa fa-map-marker" aria-hidden="true"/></div>
                                        <div className="info">
                                            <h3 className="title">ADDRESS</h3>
                                            <p>
                                                <i className="fa fa-map-marker" aria-hidden="true"/> &nbsp 15/3 Junction Plot
                                                "Shree Krishna Krupa", Rajkot - 360001.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
