import React, { useState, useEffect } from 'react';
import s from './Slider.module.sass';
import { useNavigate } from 'react-router-dom';

function Slider({  images  }) {
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (images.length > 0) {
            setCurrentImage(0);
        }
    }, [images]);

    const changeIndex = (e, index) => {
        e.stopPropagation();
        const newIndex = (currentImage + index + images.length) % images.length;
        setCurrentImage(newIndex);
    };

    const handleChooseImage = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className={s.container}>
            <meta httpEquiv="Cache-Control" content="max-age=3600" />
            <div className={s.left}>
                <div className={s.prew} style={{ cursor: 'pointer' }}>
                    <button onClick={(e) => changeIndex(e, -1)} className={s.leftButton}>
                        <img src="/icons/slider_arrow.png" alt="prev" />
                    </button>
                    <img src={images[currentImage]} alt="preview" />
                    <button onClick={(e) => changeIndex(e, 1)} className={s.rightButton}>
                        <img src="/icons/slider_arrow.png" alt="next" />
                    </button>
                </div>
                <div className={s.rulet}>
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={currentImage === index ? s.selectedBlock : s.block}
                            onClick={() => handleChooseImage(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;
