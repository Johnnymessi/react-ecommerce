import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className='hero'>

            {/* PHẦN TRÁI CỦA HERO */}

            <div className="hero-left">

                <h2> Mới Nhất</h2>

                <div>
                    <div className="hand-hand-icon">
                        <p>NEW</p>
                        <img src={hand_icon} alt="" />
                    </div>

                    <p>Bộ sưu tập</p>
                    {/* <p>dành cho mọi người</p> */}
                </div>

                <div className="hero-latest-btn">
                    <div>Bộ Sưu Tập Mới Nhất</div>
                    <img src={arrow_icon} alt="" />
                </div>

            </div>

            {/* PHẦN PHẢI CỦA HERO */}
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>

        </div>
    )
}

export default Hero;
