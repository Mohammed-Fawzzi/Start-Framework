import React from 'react'

export default function About() {
  return (
    <>
      <section className='about vh-100 d-flex justify-content-center align-items-center'>
        <div className="text-white text-center">
          <h1 className='fw-bold'>ABOUT COMPONENT</h1>

            <div className="about-star pb-3 my-4">
              <i className='fa-solid fa-star fs-4'></i>
            </div>
            
            <div className="about-caption container mt-2">
              <div className="row d-flex justify-content-center">

                <div className="col-md-6">
                  <p>
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files  including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>

                <div className="col-md-6">
                  <p>
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including    HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>

              </div>
            </div>

        </div>
      </section>
    </>
  )
}
