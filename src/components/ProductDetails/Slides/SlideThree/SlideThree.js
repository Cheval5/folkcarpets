import './SlideThree.scss'
import React from 'react';

const SlideThree = (props) => {
    return (
        <>
            <img className="slide-three__details-image"  src={props.imageTwo} alt='product'/>
        </>
    );
};

export default SlideThree;