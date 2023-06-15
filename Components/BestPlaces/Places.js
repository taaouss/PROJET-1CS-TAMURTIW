import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from "swiper/react"
import "swiper/css"
import './Places.css'
import '../InfoSection/index.css'
import data from'./slider.json'
import image from './r1.png'


const firstImageUrl = data[0].image;

const Places = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
               <div className="r-head flexColStart">
                  <span className="orangeText">Best choices</span>
                  <span className="primaryText">Popular destinations</span>
               </div>
        <Swiper>
          {data.map((card, i) => {
            return (
            <SwiperSlide key={i}>
              <div className=" flexColStart r-card">
                <img src={image} alt="image" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>DA</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
            );
          })}
        </Swiper>

        </div>
    </section>

  )
}

export default Places