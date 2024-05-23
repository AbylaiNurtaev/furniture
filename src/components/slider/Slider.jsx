import React, { useEffect, useState } from 'react';
import s from './Slider.module.sass';
import { useNavigate } from 'react-router-dom';



function Slider({img1, img2, img3}) {
    const [currentImage, setCurrentImage] = useState(0)

    const [images, setImages] = useState([img1, img2, img3])
    const navigate = useNavigate()

    const changeIndex = (e, index) => {
        e.stopPropagation()
        if (currentImage + index == images.length) {
            setCurrentImage(0)
            
        } else if (currentImage + index < 0) {
            setCurrentImage(images.length - 1)
        }
        else {
            setCurrentImage(prev => prev + index);
        }
    }

    const handleChooseImage = (index) => {
        setCurrentImage(index)
    }

    return (
        <div className={s.container}>
        <meta httpEquiv="Cache-Control" content="max-age=3600"></meta>


        <div className={s.left}>
            <div className={s.prew} style={{cursor: 'pointer'}}>
                <button onClick={(e) => { changeIndex(e, -1) }} className={s.leftButton}><img src="/icons/slider_arrow.png" alt="" /></button>
                <img src={images[currentImage]} alt="preview" />
                <button onClick={(e) => { changeIndex(e, 1) }} className={s.rightButton}><img src="/icons/slider_arrow.png" alt="" /></button>
            </div>
            <div className={s.rulet}>
                <div className={currentImage == 0 ? s.selectedBlock : s.block} onClick={() => handleChooseImage(0)}></div>
                <div className={currentImage == 1 ? s.selectedBlock : s.block} onClick={() => handleChooseImage(1)}></div>
                <div className={currentImage == 2 ? s.selectedBlock : s.block} onClick={() => handleChooseImage(2)}></div>
            </div>
        </div>


        </div>
    );
}

export default Slider;
