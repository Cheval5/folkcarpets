import React, { Component } from 'react';
import Carousel, {consts} from "react-elastic-carousel";
import Item from "./Item";
import "./Slider.scss";
import SlideOne from './Slides/SlideOne/SlideOne';
import SlideTwo from './Slides/SlideTwo/SlideTwo';
import SlideThree from './Slides/SlideThree/SlideThree';
import SlideFour from './Slides/SlideFour/SlideFour';
import Left from '../../assets/logo/left-arrow.svg';
import Right from '../../assets/logo/right.svg';

class Slider extends Component {
    myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img className="arrow" src={Left} alt="left arrow"/> : <img className="arrow" src={Right} alt="right arrow"/>
        return (
            <button className="button" onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    render() {
        const breakPoints = [
            { width: 70, itemsToShow: 1 }
        ];
        return (
            <>
                <div className="slider">
                    <Carousel 
                        breakPoints={breakPoints}
                        renderArrow={this.myArrow}
                    >
                        <Item>
                            <SlideOne
                                imageMain = {this.props.imageMain}
                            />
                        </Item>
                        <Item>
                            <SlideTwo
                                imageOne = {this.props.imageOne}
                            />
                        </Item>
                        <Item>
                            <SlideThree
                                imageTwo = {this.props.imageTwo}
                            />
                        </Item>
                        <Item>
                            <SlideFour
                                imageThree = {this.props.imageThree}
                            />
                        </Item>
                    </Carousel>
                </div>
            </>
        );
    }
}

export default Slider;