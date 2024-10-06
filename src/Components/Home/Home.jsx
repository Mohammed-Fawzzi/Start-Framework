import React from 'react'
import Image from '../../Assets/avataaars.svg'

export default function Home() {
  return (
    <>
      <section className='home vh-100 d-flex justify-content-center align-items-center'>
        <div className="header-image text-white text-center p-4">
          <img src={Image} alt="home-image" className='w-75'/>
            <h1 className='fw-bold py-3'>START FRAMEWORK</h1>
            <div className="home-star pb-3">
              <i className='fa-solid fa-star fs-4'></i>
            </div>
          <p className=' fs-5'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  )
}
