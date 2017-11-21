import PropTypes from 'prop-types';
import React from 'react';

export default function TitleBlock ({
    title,
    subtitle
}) {
    return (
        <div className="">
            <div className="title-block">
                <div className="wrap-content">

                    <h2 className="title-group">{title}</h2>

                    <div className="title-group-note">{subtitle}</div>
                </div>
            </div>
        </div>
    );
}

TitleBlock.propTypes = {
    title   : PropTypes.string,
    subtitle: PropTypes.string
};
