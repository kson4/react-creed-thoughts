import React from 'react'
import './Ad.css'

export default function Ad () {
  return (
    <div className='ad'>
      <a href='https://www.youtube.com/watch?v=EqdXCEZC_Ng'>
        <p className='header'>ADVERTISEMENT</p>
        <div className='ad-container'>
          <div>
            <p className='ad-content-top'>Kevin's Famous Chili</p>
            <p className='ad-content-bot'>
              <strong>Click Here</strong> to See the Recipe and Find Out More
            </p>
          </div>
          <div className='ad-img-container'>
            <img
              src='https://res.cloudinary.com/dg6x4qldl/image/upload/v1671045949/creed-thoughts/kevins-chili_qurcdm.jpg'
              alt='Kevin'
            />
          </div>
        </div>
      </a>
    </div>
  )
}
