import PropTypes from 'prop-types';
import React from 'react';
import Flexbox from '../Flexbox';

export default function HeroHeading ({
    title,
    subtitle
}) {
    return (
        <Flexbox
            hAlignCenter={true}
            style={{
                margin    : '10px 0',
                flexWrap  : 'wrap',
                alignItems: 'baseline'}}>
            <h1 style={{
                margin  : 0,
                fontSize: '4.5rem'}}>
                {title}&nbsp;
            </h1>
            <small style={{
                fontWeight: 300,
                fontSize  : '20px',
                lineHeight: '20px',
                opacity   : 0.7}}>
                {subtitle}
            </small>
        </Flexbox>
    );
}

HeroHeading.propTypes = {
    title   : PropTypes.string,
    subtitle: PropTypes.string
};
