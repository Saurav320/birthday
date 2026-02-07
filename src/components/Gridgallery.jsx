import React from 'react'
import "./Gridgallery.css"
import { useNavigate } from 'react-router-dom'
const Gridgallery = () => {
  const navigate = useNavigate;
  const gridgallery = [
    { id: 1, img: "/images/image1.jpeg" },
    { id: 2, img: "/images/image2.jpeg" },
    { id: 3, img: "/images/image3.jpeg" },
    { id: 4, img: "/images/image4.jpeg" },
    { id: 5, img: "/images/image5.jpeg" },
    { id: 6, img: "/images/image6.jpeg" },
    { id: 7, img: "/images/image7.jpeg" },
    { id: 8, img: "/images/image8.jpeg" },
    { id: 9, img: "/images/image9.jpeg" },
    { id: 10, img: "/images/image10.jpeg" },
    { id: 11, img: "/images/image11.jpeg" },
    { id: 12, img: "/images/image12.jpeg" },
  ];
  return (
    <div>
      <div className='gridmaindiv'>
        {gridgallery.map((item) => (
          <div className='gridcard' key={item.id}>
            <div className='galleryimgbox'>
              <img src={item.img} alt="gallery" />

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Gridgallery
