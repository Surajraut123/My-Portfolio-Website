
import { useState } from "react";
import "./testimoniols.scss";
const ImageSlider = ({slides}) => {
    const [ currentIndex, setCurrentIndex] = useState(0);
    const sliderStyles ={
        height : '100%',
        position : 'relative',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor : 'black',
        borderRadius : '22px',
        backgroundImage: 'linear-gradient(11deg, #000000, #437fb3)'
    }

    const slidesStyles={
        width : `${slides[currentIndex].width}`,
        backgroundImage : `url(${slides[currentIndex].url})`,
        height : '97%',
        borderRadius : '10px',
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        position : 'relative',
        transition : '0.8s',
        margin : '7px'
    }

    const leftArrowStyles = {
        position : 'absolute',
        top : '42%',
        trasform : 'translate(0, -50%)',
        left : '32px',
        fontSize : '45px',
        color : '#fff',
        zIndex : 1,
        cursor : 'pointer'
    }
    const rightArrowStyles = {
        position : 'absolute',
        top : '42%',
        trasform : 'translate(0, -50%)',
        right : '32px',
        fontSize : '45px',
        color : '#fff',
        zIndex : 1,
        cursor : 'pointer'
    }

    const goToPrevious =() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }
    const goToNext =() => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }
    const infoStyle = {
        position: 'absolute',
        zIndex: '1',
        bottom: '25px',
        textAlign: 'center',
        backgroundColor: '#83938e7a',
        margin: '0px 5px',
        borderR: '7px'
    }

    const paraStyle ={
        fontSize: '24px',
        fontFamily: 'system-ui',
        fontWeight: '500',
        color: 'white',
        textShadow: '0px 0px 3px black',
        transition : '0.8s'
    }


    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>&lt;</div>
            <div style={rightArrowStyles} onClick={goToNext}>&gt;</div>
            <div className="slidesStyles" style={slidesStyles}></div>
            <div className="info" style={infoStyle}>
                <p style={paraStyle}>{`${slides[currentIndex].title}`}</p>
            </div>
            {/* <div style={dotsContainer}>{slides.map((slide, slideIndex) =>(
                <div key={slideIndex} style={dotStyles} onClick={() => gotoSlides(slideIndex)}>&#11044;</div>
            ))}</div> */}
        </div>
    )
};

export default ImageSlider;