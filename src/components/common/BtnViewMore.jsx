import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function BtnViewMore ({link, title}) {
    return (
        <div className="col-xs-12">
            <div className="text-center">
                <Link to={`${link}`} className="btn btn-view-more" title={title}>
                    {title}
                </Link>
            </div>
        </div>
    );
}
BtnViewMore.propTypes = {
    link : PropTypes.string,
    title: PropTypes.string
};
