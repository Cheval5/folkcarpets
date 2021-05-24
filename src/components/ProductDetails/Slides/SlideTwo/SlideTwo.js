import './SlideTwo.scss'
import React from 'react';

const SlideTwo = (props) => {
    return (
        <>
            <img className="slide-two__details-image" src={props.imageOne} alt='product'/>
        </>
    );
};

export default SlideTwo;