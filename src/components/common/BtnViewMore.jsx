import React from 'react';
import PropTypes from 'prop-types';
export default function BtnViewMore ({link,title}) {
    return (
        <div className="col-xs-12">
            <div className="text-center">
                <a href={link} className="btn btn-view-more">{title}</a>
            </div>
        </div>
    );
}
BtnViewMore.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string
};
