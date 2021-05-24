import './SlideFour.scss'
import React from 'react';

const SlideFour = (props) => {
    return (
        <>
            <img className="slide-four__details-image"  src={props.imageThree} alt='product'/>
        </>
    );
};

export default SlideFour;