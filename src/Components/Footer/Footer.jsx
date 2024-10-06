import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='footer position-relative bottom-0 pt-3'>

        <div className="container">
          <div className="row">

            <div className="col-md-4 my-4">
              <div className='text-white text-center'>
                <p className='fw-bold fs-4'>LOCATION</p>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>

            <div className="col-md-4 my-4">
              <div className='text-white text-center'>
                <p className='fw-bold fs-4'>AROUND THE WEB</p>

                <div className="icons d-flex justify-content-center">
                  <div className="icon me-4">
                    <i className='fa-brands fa-facebook fs-4'></i>
                  </div>

                  <div className="icon me-4">
                    <i className="fa-brands fa-x-twitter"></i>
                  </div>

                  <div className="icon me-4">
                    <i className='fa-brands fa-linkedin-in fs-4'></i>
                  </div>

                  <div className="icon">
                    <i className='fa-solid fa-globe fs-4'></i>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="col-md-4 my-4">
            <div className='text-white text-center'>
                <p className='fw-bold fs-4'>ABOUT FREELANCER</p>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>

          </div>
        </div>
        <div className="copy-right p-1">
            <p className='text-white text-center pt-3'>© All Rights Reserved. Designed by Mohamed Fawzzi.</p>
        </div>
      </footer>
    </>
  )
}
