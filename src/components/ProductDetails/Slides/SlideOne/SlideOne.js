import './SlideOne.scss'
import React from 'react';

const SlideOne = (props) => {
    return (
        <>
            <img className="slide-one__details-image" src={props.imageMain} alt='product'/>
        </>
    );
};

export default SlideOne;